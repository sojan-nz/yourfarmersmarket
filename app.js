(function(){
  var D=window.DIRECTORY, grid=document.getElementById('stalls'), chips=document.getElementById('chips'),
      search=document.getElementById('search'), empty=document.getElementById('empty');
  var active='All';
  var esc=function(s){var d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;};
  var marketName=function(id){var m=D.markets.filter(function(x){return x.id===id})[0];return m?m.name:'';};
  var hues=['#c4512d','#d9a62e','#5d7a3a','#8a5a3b','#a8433a','#6b7f4e'];

  var cats=['All'].concat(D.stalls.map(function(s){return s.category}).filter(function(c,i,a){return a.indexOf(c)===i}));
  chips.innerHTML=cats.map(function(c){return '<button class="chip'+(c===active?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join('');

  function card(s,i){
    var initials=s.name.replace('Placeholder ','').split(' ').map(function(w){return w[0]}).slice(0,2).join('');
    var media=s.photo?'<img src="'+esc(s.photo)+'" alt="'+esc(s.name)+'" loading="lazy">'
      :'<div class="ph" style="--h:'+hues[i%hues.length]+'"><span>'+esc(initials)+'</span></div>';
    return '<article class="stall reveal">'+(s.sponsored?'<span class="ribbon">Featured</span>':'')+
      '<div class="media">'+media+'</div><div class="body"><p class="where">'+esc(marketName(s.market))+' · '+esc(s.category)+'</p>'+
      '<h3>'+esc(s.name)+'</h3><p class="sells">'+esc(s.sells)+'</p><p>'+esc(s.brief)+'</p>'+
      '<p class="tags">'+(s.tags||[]).map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</p></div></article>';
  }
  function render(){
    var q=search.value.trim().toLowerCase();
    var list=D.stalls.filter(function(s){
      var okc=active==='All'||s.category===active;
      var hay=(s.name+' '+s.sells+' '+s.brief+' '+(s.tags||[]).join(' ')).toLowerCase();
      return okc&&(!q||hay.indexOf(q)>-1);
    }).sort(function(a,b){return (b.sponsored?1:0)-(a.sponsored?1:0)});
    grid.innerHTML=list.map(card).join('');
    empty.hidden=list.length>0; observe();
  }
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  function observe(){document.querySelectorAll('.reveal:not(.in)').forEach(function(el){io?io.observe(el):el.classList.add('in')})}
  chips.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;active=b.dataset.c;
    chips.querySelectorAll('.chip').forEach(function(c){c.classList.toggle('on',c===b)});render()});
  search.addEventListener('input',render);

  var m=D.markets[0], t=document.getElementById('thisweek');
  if(t) t.innerHTML='<p class="eyebrow">This Saturday</p><h3>'+esc(m.name)+'</h3><p>'+esc(m.day)+' · '+esc(m.time)+'</p><p>'+esc(m.location)+'</p>';
  render();
})();
