(function(){
  var M=window.MARKETS; if(!M) return;
  var list=document.getElementById('mk-list'), chips=document.getElementById('mk-regions'),
      q=document.getElementById('mk-search'), empty=document.getElementById('mk-empty'), region='All', onlyMembers=false;
  var mt=document.getElementById('mk-members');
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
  var host=function(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return 'source'}};
  var regions=['All'].concat(M.regionsOrder.filter(function(r){return M.markets.some(function(m){return m.region===r})}));
  chips.innerHTML=regions.map(function(r){return '<button class="chip'+(r===region?' on':'')+'" data-r="'+esc(r)+'">'+esc(r)+'</button>'}).join('');
  var up=document.getElementById('mk-updated'); if(up) up.textContent=M.markets.length+' markets · updated '+M.updated;
  function card(m){
    return '<article class="mk'+(m.status==='check'?' warn':'')+'">'+
      '<p class="where">'+esc(m.town)+' · '+esc(m.region)+'</p><h3>'+esc(m.name)+'</h3>'+(m.member?'<p class="member" title="Authenticated member of Farmers Markets New Zealand">✓ FMNZ member</p>':'')+
      '<p class="when"><strong>'+esc(m.day)+'</strong><br>'+esc(m.time)+'</p><p class="venue">'+esc(m.venue)+'</p>'+((m.facts&&m.facts.length)?'<ul class="facts">'+m.facts.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+
      (m.status==='check'?'<p class="flag">Check before you go</p>'+(m.notes?'<p class="note">'+esc(m.notes)+'</p>':''):(m.notes?'<p class="note">'+esc(m.notes)+'</p>':''))+
      (m.website?'<p class="site"><a href="'+esc(m.website)+'" target="_blank" rel="noopener">'+(m.website.indexOf('facebook.com')>-1?'Facebook page':'Market website')+' →</a></p>':'')+'<p class="src">Source: '+m.sources.map(function(u){return '<a href="'+esc(u)+'" target="_blank" rel="noopener nofollow">'+esc(host(u))+'</a>'}).join(', ')+'</p></article>';
  }
  function render(){
    var s=q.value.trim().toLowerCase(), order=M.regionsOrder;
    var rows=M.markets.filter(function(m){
      return (!onlyMembers||m.member)&&(region==='All'||m.region===region)&&(!s||(m.name+' '+m.town+' '+m.region+' '+m.day+' '+m.venue).toLowerCase().indexOf(s)>-1);
    }).sort(function(a,b){return order.indexOf(a.region)-order.indexOf(b.region)||a.town.localeCompare(b.town)});
    var html='',cur='';
    rows.forEach(function(m){ if(region==='All'&&m.region!==cur){cur=m.region;html+='<h3 class="rhead">'+esc(cur)+'</h3>'} html+=card(m); });
    list.innerHTML=html; empty.hidden=rows.length>0;
  }
  chips.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;region=b.dataset.r;
    chips.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',c===b)});render()});
  q.addEventListener('input',render);
  if(mt) mt.addEventListener('change',function(){onlyMembers=mt.checked;render()});
  render();
})();
