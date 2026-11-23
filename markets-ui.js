(function(){
  var M=window.MARKETS; if(!M) return;
  var $=function(id){return document.getElementById(id)};
  var list=$('mk-list'), q=$('mk-search'), daysEl=$('mk-days'), regionEl=$('mk-region'), count=$('mk-count'),
      clear=$('mk-clear'), empty=$('mk-empty'), nearBtn=$('mk-near'), geo=$('mk-geo');
  var st={day:'any',region:'',q:'',here:null};
  var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], SHORT=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};

  // Today's weekday in New Zealand time
  var nzToday=(function(){try{var w=new Intl.DateTimeFormat('en-NZ',{weekday:'long',timeZone:'Pacific/Auckland'}).format(new Date());return DAYS.indexOf(w)}catch(e){return new Date().getDay()}})();
  M.markets.forEach(function(m){
    m._days=DAYS.map(function(d,i){return new RegExp(d,'i').test(m.day)?i:-1}).filter(function(i){return i>-1});
    m._occasional=/first|1st|3rd|seasonal|oct|unconfirmed/i.test(m.day);
  });

  // Region dropdown and town suggestions
  M.regionsOrder.filter(function(r){return M.markets.some(function(m){return m.region===r})}).forEach(function(r){
    var o=document.createElement('option');o.value=r;o.textContent=r;regionEl.appendChild(o)});
  var towns={};M.markets.forEach(function(m){towns[m.town]=1});
  $('mk-towns').innerHTML=Object.keys(towns).sort().map(function(t){return '<option value="'+esc(t)+'">'}).join('');

  function km(a,b,c,d){var R=6371,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 2*R*Math.asin(Math.sqrt(h))}
  function matchDay(m){
    if(st.day==='any') return true;
    if(st.day==='today') return m._days.indexOf(nzToday)>-1;
    if(st.day==='wk') return m._days.some(function(d){return d>0&&d<6});
    return m._days.indexOf(+st.day)>-1;
  }
  function badge(m){
    if(m._days.indexOf(nzToday)>-1) return '<span class="today">'+(m._occasional?'Today, check dates':'On today')+'</span>';
    if(m._days.indexOf((nzToday+1)%7)>-1) return '<span class="tmrw">Tomorrow</span>';
    return '';
  }
  function card(m){
    var d=m._days.length?SHORT[m._days[0]]:'—', two=m._days.length>1?'<small>+'+SHORT[m._days[1]]+'</small>':'';
    var dist=st.here?'<span class="dist">'+Math.round(m._km)+' km</span>':'';
    var more=(m.venue?'<p class="venue">'+esc(m.venue)+'</p>':'')+
      ((m.facts&&m.facts.length)?'<ul class="facts">'+m.facts.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+
      (m.notes?'<p class="note">'+esc(m.notes)+'</p>':'')+
      (m.website?'<p class="site"><a href="'+esc(m.website)+'" target="_blank" rel="noopener">'+(m.website.indexOf('facebook.com')>-1?'Facebook page':'Market website')+' →</a></p>':'');
    return '<article class="mk2'+(m.status==='check'?' warn':'')+'">'+
      '<div class="dtile'+(m._days.indexOf(nzToday)>-1?' live':'')+'"><b>'+d+'</b>'+two+'</div>'+
      '<div class="mbody"><div class="mtop"><h3>'+esc(m.name)+'</h3>'+dist+'</div>'+
      '<p class="mline">'+esc(m.town)+' · '+esc(m.time)+(m._occasional?' · <em>'+esc(m.day)+'</em>':'')+'</p>'+
      '<p class="mbadges">'+badge(m)+(m.status==='check'?'<span class="flag">Check before you go</span>':'')+'</p>'+
      (more?'<details><summary>Details</summary>'+more+'</details>':'')+'</div></article>';
  }
  function render(){
    var s=st.q.trim().toLowerCase(), order=M.regionsOrder;
    var rows=M.markets.filter(function(m){
      return matchDay(m)&&(!st.region||m.region===st.region)&&(!s||(m.name+' '+m.town+' '+m.region).toLowerCase().indexOf(s)>-1);
    });
    if(st.here){rows.forEach(function(m){m._km=km(st.here[0],st.here[1],m.lat,m.lng)});rows.sort(function(a,b){return a._km-b._km})}
    else rows.sort(function(a,b){return order.indexOf(a.region)-order.indexOf(b.region)||a.town.localeCompare(b.town)});
    var html='',cur='',group=!st.here&&!s;
    rows.forEach(function(m){ if(group&&m.region!==cur){cur=m.region;html+='<h3 class="rhead">'+esc(cur)+'</h3>'} html+=card(m); });
    list.innerHTML=html; empty.hidden=rows.length>0;
    var label=st.day==='any'?'':st.day==='today'?' on today ('+DAYS[nzToday]+')':st.day==='wk'?' on weekdays':' on '+DAYS[+st.day]+'s';
    count.innerHTML='<strong>'+rows.length+'</strong> market'+(rows.length===1?'':'s')+label+(st.region?' in '+esc(st.region):'')+(st.here?', nearest first':'');
    clear.hidden=!(st.day!=='any'||st.region||s||st.here);
  }
  daysEl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;st.day=b.dataset.d;
    daysEl.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});render()});
  regionEl.addEventListener('change',function(){st.region=regionEl.value;render()});
  q.addEventListener('input',function(){st.q=q.value;render()});
  clear.addEventListener('click',function(){st={day:'any',region:'',q:'',here:null};q.value='';regionEl.value='';geo.hidden=true;
    nearBtn.classList.remove('on');daysEl.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x.dataset.d==='any')});render()});
  nearBtn.addEventListener('click',function(){
    if(!navigator.geolocation){geo.hidden=false;geo.textContent='Location isn’t available in this browser. Type your town instead.';return}
    nearBtn.classList.add('busy');
    navigator.geolocation.getCurrentPosition(function(p){
      nearBtn.classList.remove('busy');nearBtn.classList.add('on');st.here=[p.coords.latitude,p.coords.longitude];
      geo.hidden=false;geo.textContent='Sorted by distance from you. Distances are approximate.';render();
    },function(){nearBtn.classList.remove('busy');geo.hidden=false;geo.textContent='We couldn’t get your location. Type your town instead.'},{timeout:10000,maximumAge:600000});
  });
  render();
})();
