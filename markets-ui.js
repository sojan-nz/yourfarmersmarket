(function(){
  var M=window.MARKETS; if(!M) return;
  var $=function(id){return document.getElementById(id)};
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
  var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], SHORT=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var RADII=[0,5,10,25,50,100];
  var st={q:'',here:null,region:'',day:'any',radius:0};

  // Today's weekday in New Zealand time
  var nzToday=(function(){try{return DAYS.indexOf(new Intl.DateTimeFormat('en-NZ',{weekday:'long',timeZone:'Pacific/Auckland'}).format(new Date()))}catch(e){return new Date().getDay()}})();
  M.markets.forEach(function(m){
    m._days=DAYS.map(function(d,i){return new RegExp(d,'i').test(m.day)?i:-1}).filter(function(i){return i>-1});
    m._occasional=/first|1st|3rd|seasonal|oct|unconfirmed/i.test(m.day);
  });
  var towns={};M.markets.forEach(function(m){towns[m.town]=[m.lat,m.lng]});
  var regions=M.regionsOrder.filter(function(r){return M.markets.some(function(m){return m.region===r})});
  function townMatch(s){s=s.trim().toLowerCase();var k=Object.keys(towns).filter(function(t){return t.toLowerCase()===s})[0];return k?{name:k,at:towns[k]}:null}
  function km(a,b,c,d){var R=6371,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)*Math.sin(x/2)+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)*Math.sin(y/2);return 2*R*Math.asin(Math.sqrt(h))}
  function dayLabel(d){return d==='any'?'Any day':d==='today'?'Today':d==='wk'?'Weekdays':DAYS[+d]}
  function matchDay(m,d){
    if(d==='any') return true;
    if(d==='today') return m._days.indexOf(nzToday)>-1;
    if(d==='wk') return m._days.some(function(x){return x>0&&x<6});
    return m._days.indexOf(+d)>-1;
  }

  // Build sheet controls once
  $('mk-towns').innerHTML=Object.keys(towns).sort().map(function(t){return '<option value="'+esc(t)+'">'}).join('');
  $('mk-regions').innerHTML=['All regions'].concat(regions).map(function(r,i){return '<button type="button" class="chip" data-r="'+(i?esc(r):'')+'">'+esc(r)+'</button>'}).join('');
  var dayOpts=['any','today','6','0','wk'];
  $('mk-days').innerHTML=dayOpts.map(function(d){
    var sub=d==='today'?DAYS[nzToday]:d==='6'||d==='0'?'Weekend':d==='wk'?'Mon – Fri':'Show all';
    return '<button type="button" class="tile" data-d="'+d+'"><b>'+dayLabel(d)+'</b><small>'+sub+'</small></button>'}).join('');
  $('mk-radius').innerHTML=RADII.map(function(r){return '<button type="button" class="chip" data-k="'+r+'">'+(r?r+' km':'Any distance')+'</button>'}).join('');

  function compute(){
    var s=st.q.trim().toLowerCase(), tm=townMatch(s), origin=st.here||(tm?tm.at:null);
    var rows=M.markets.filter(function(m){
      return matchDay(m,st.day)&&(!st.region||m.region===st.region)&&(tm||!s||(m.name+' '+m.town+' '+m.region).toLowerCase().indexOf(s)>-1);
    });
    M.markets.forEach(function(m){m._km=origin?km(origin[0],origin[1],m.lat,m.lng):null});
    var nearest=null;
    if(origin){rows.sort(function(a,b){return a._km-b._km});nearest=rows[0]||null;if(st.radius) rows=rows.filter(function(m){return m._km<=st.radius})}
    else rows.sort(function(a,b){return M.regionsOrder.indexOf(a.region)-M.regionsOrder.indexOf(b.region)||a.town.localeCompare(b.town)});
    return {rows:rows,origin:origin,from:st.here?'you':(tm?tm.name:''),nearest:nearest,s:s};
  }

  function badge(m){
    if(m._days.indexOf(nzToday)>-1) return '<span class="today">'+(m._occasional?'Today, check dates':'On today')+'</span>';
    if(m._days.indexOf((nzToday+1)%7)>-1) return '<span class="tmrw">Tomorrow</span>';
    return '';
  }
  function card(m,showKm){
    var ds=m._days.slice(), pick=st.day==='today'?nzToday:(/^\d$/.test(st.day)?+st.day:-1);
    if(pick>-1&&ds.indexOf(pick)>0){ds.splice(ds.indexOf(pick),1);ds.unshift(pick)}
    var d=ds.length?SHORT[ds[0]]:'—', two=ds.length>1?'<small>+'+SHORT[ds[1]]+'</small>':'';
    var more=(m.venue?'<p class="venue">'+esc(m.venue)+'</p>':'')+
      ((m.facts&&m.facts.length)?'<ul class="facts">'+m.facts.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+
      (m.notes?'<p class="note">'+esc(m.notes)+'</p>':'')+
      (m.website?'<p class="site"><a href="'+esc(m.website)+'" target="_blank" rel="noopener">'+(m.website.indexOf('facebook.com')>-1?'Facebook page':'Market website')+' →</a></p>':'');
    return '<article class="mk2'+(m.status==='check'?' warn':'')+'">'+
      '<div class="dtile'+(m._days.indexOf(nzToday)>-1?' live':'')+'"><b>'+d+'</b>'+two+'</div>'+
      '<div class="mbody"><div class="mtop"><h3>'+esc(m.name)+'</h3>'+(showKm?'<span class="dist">'+(m._km<1?'<1':Math.round(m._km))+' km</span>':'')+'</div>'+
      '<p class="mline">'+esc(m.town)+' · '+esc(m.time)+(m._occasional?' · <em>'+esc(m.day)+'</em>':'')+'</p>'+
      '<p class="mbadges">'+badge(m)+(m.status==='check'?'<span class="flag">Check before you go</span>':'')+'</p>'+
      (more?'<details><summary>Details</summary>'+more+'</details>':'')+'</div></article>';
  }

  function render(){
    var r=compute(), rows=r.rows;
    // Results
    var html='',cur='',group=!r.origin&&!r.s;
    rows.forEach(function(m){ if(group&&m.region!==cur){cur=m.region;html+='<h3 class="rhead">'+esc(cur)+'</h3>'} html+=card(m,!!r.origin); });
    $('mk-list').innerHTML=html;
    var empty=$('mk-empty'); empty.hidden=rows.length>0;
    empty.textContent=(r.origin&&st.radius&&r.nearest)?'Nothing within '+st.radius+' km. The nearest is '+r.nearest.name+' in '+r.nearest.town+', about '+Math.round(r.nearest._km)+' km away.':'No markets match. Try another day, or clear a filter above.';
    $('mk-count').innerHTML='<strong>'+rows.length+'</strong> market'+(rows.length===1?'':'s')+(r.origin?' · nearest first':'');
    // Search pill summary
    $('sp-where').textContent=st.here?'Near me':(r.from||st.q||st.region||'Anywhere in NZ');
    $('sp-when').textContent=st.day==='today'?'Today ('+DAYS[nzToday].slice(0,3)+')':dayLabel(st.day);
    $('sp-far').textContent=st.radius&&r.origin?'Within '+st.radius+' km':'Any distance';
    // Active filter chips
    var act=[];
    if(st.here) act.push(['here','Near me']); else if(st.q) act.push(['q','“'+st.q+'”']);
    if(st.region) act.push(['region',st.region]);
    if(st.day!=='any') act.push(['day',dayLabel(st.day)]);
    if(st.radius&&r.origin) act.push(['radius','Within '+st.radius+' km']);
    $('mk-active').innerHTML=act.map(function(a){return '<button type="button" class="achip" data-x="'+a[0]+'">'+esc(a[1])+' <span aria-hidden="true">×</span><span class="sr">Remove</span></button>'}).join('')+
      (act.length>1?'<button type="button" class="linkbtn" data-x="all">Clear all</button>':'');
    // Quick chips state
    document.querySelectorAll('#quick button').forEach(function(b){var q=b.dataset.q;b.classList.toggle('on',q==='near'?!!st.here:st.day===q)});
    // Sheet state
    document.querySelectorAll('#mk-regions .chip').forEach(function(b){b.classList.toggle('on',b.dataset.r===st.region)});
    document.querySelectorAll('#mk-days .tile').forEach(function(b){b.classList.toggle('on',b.dataset.d===st.day)});
    document.querySelectorAll('#mk-radius .chip').forEach(function(b){b.classList.toggle('on',+b.dataset.k===st.radius);b.disabled=!r.origin&&+b.dataset.k>0});
    $('far-hint').hidden=!!r.origin;
    $('mk-near').classList.toggle('on',!!st.here);
    $('mk-show').textContent=rows.length?'Show '+rows.length+' market'+(rows.length===1?'':'s'):'No matches yet';
  }

  // Sheet open/close
  var sheet=$('sheet'), lastFocus=null;
  function openSheet(section){
    lastFocus=document.activeElement; sheet.hidden=false; document.body.classList.add('noscroll');
    var t=$('s-'+(section||'where')); if(t) t.scrollIntoView({block:'start'});
    if(!section||section==='where') setTimeout(function(){$('mk-search').focus()},50);
  }
  function closeSheet(){sheet.hidden=true;document.body.classList.remove('noscroll');if(lastFocus)lastFocus.focus();}
  $('sp-open').addEventListener('click',function(e){var seg=e.target.closest('[data-go]');openSheet(seg?seg.dataset.go:'where')});
  sheet.addEventListener('click',function(e){if(e.target.closest('[data-close]')){closeSheet();if(e.target.id==='mk-show')$('markets').scrollIntoView({behavior:'smooth'})}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!sheet.hidden)closeSheet()});

  // Location
  function locate(){
    var geo=$('mk-geo');
    if(!navigator.geolocation){geo.hidden=false;geo.textContent='Location isn’t available in this browser. Search for your town instead.';return}
    $('mk-near').classList.add('busy');
    navigator.geolocation.getCurrentPosition(function(p){
      $('mk-near').classList.remove('busy');st.here=[p.coords.latitude,p.coords.longitude];st.q='';$('mk-search').value='';
      geo.hidden=false;geo.textContent='Using your location. Market positions are approximate (town centre).';render();
    },function(){$('mk-near').classList.remove('busy');geo.hidden=false;geo.textContent='We couldn’t get your location. Search for your town instead.'},{timeout:10000,maximumAge:600000});
  }

  // Inputs
  $('mk-search').addEventListener('input',function(e){st.q=e.target.value;if(st.q){st.here=null;$('mk-geo').hidden=true}render()});
  $('mk-near').addEventListener('click',function(){if(st.here){st.here=null;$('mk-geo').hidden=true;render()}else locate()});
  $('mk-regions').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;st.region=b.dataset.r;render()});
  $('mk-days').addEventListener('click',function(e){var b=e.target.closest('.tile');if(!b)return;st.day=b.dataset.d;render()});
  $('mk-radius').addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b||b.disabled)return;st.radius=+b.dataset.k;render()});
  function clearAll(){st={q:'',here:null,region:'',day:'any',radius:0};$('mk-search').value='';$('mk-geo').hidden=true;render()}
  $('mk-clear').addEventListener('click',clearAll);
  $('quick').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var q=b.dataset.q;
    if(q==='near'){if(st.here){st.here=null;$('mk-geo').hidden=true;render()}else locate();return}
    st.day=(st.day===q)?'any':q;render()});
  $('mk-active').addEventListener('click',function(e){var b=e.target.closest('[data-x]');if(!b)return;var x=b.dataset.x;
    if(x==='all') return clearAll();
    if(x==='here'){st.here=null;$('mk-geo').hidden=true} if(x==='q'){st.q='';$('mk-search').value=''}
    if(x==='region')st.region=''; if(x==='day')st.day='any'; if(x==='radius')st.radius=0; render()});

  render();
})();
