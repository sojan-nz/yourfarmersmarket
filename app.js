(function(){
  var root=document.getElementById('markets');
  var esc=function(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML;};
  root.innerHTML=window.DIRECTORY.markets.map(function(m){
    return '<article class="market" id="'+esc(m.id)+'"><h3>'+esc(m.name)+'</h3>'+
      '<p class="meta">'+esc(m.day)+' · '+esc(m.location)+'</p><p>'+esc(m.blurb)+'</p>'+
      '<div class="stalls">'+m.stalls.map(function(s){
        return '<div class="stall">'+(s.sponsored?'<span class="badge">Featured</span>':'')+
          '<h4>'+esc(s.name)+'</h4><div class="sells">'+esc(s.sells)+'</div><p>'+esc(s.brief)+'</p></div>';
      }).join('')+'</div></article>';
  }).join('');
})();
