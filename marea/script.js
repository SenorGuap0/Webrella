document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');

  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  var hero=document.querySelector('.hero');
  var art=document.querySelector('.hero-art');
  if(hero&&art&&window.matchMedia('(pointer:fine)').matches){
    hero.addEventListener('mousemove',function(e){
      var r=hero.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5;
      var y=(e.clientY-r.top)/r.height-.5;
      art.style.transform='translate('+x*12+'px,'+y*12+'px)';
    });
    hero.addEventListener('mouseleave',function(){
      art.style.transform='';
    });
  }

  var ticker=document.querySelector('.ticker-track');
  if(ticker&&!ticker.dataset.looped){
    var original=ticker.innerHTML;
    ticker.innerHTML='<div class="ticker-group">'+original+'</div><div class="ticker-group" aria-hidden="true">'+original+'</div>';
    ticker.dataset.looped='true';
  }

  var style=document.createElement('style');
  style.textContent=`
    .ticker{height:42px;display:flex;align-items:center;overflow:hidden}
    .ticker-track{display:flex!important;align-items:center!important;width:max-content!important;min-width:max-content!important;padding:0!important;gap:0!important;line-height:1!important;white-space:nowrap!important;animation:mareaTicker 24s linear infinite!important;will-change:transform}
    .ticker-group{display:flex;align-items:center;gap:28px;padding-right:28px;white-space:nowrap}
    .food-photo{width:100%!important;height:180px!important;display:block!important;object-fit:cover!important;object-position:center!important;font-size:0!important;background:none!important}
    @keyframes mareaTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  `;
  document.head.appendChild(style);
});