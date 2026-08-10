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
    hero.addEventListener('mouseleave',function(){art.style.transform='';});
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

    .story-section{grid-template-columns:minmax(0,1.15fr) minmax(300px,.9fr) minmax(210px,.42fr)!important;gap:clamp(24px,3vw,54px)!important;padding:54px 5vw!important;min-height:520px!important;overflow:hidden!important}
    .cafe-scene{height:390px!important;position:relative!important;overflow:hidden!important;background:#21120c!important;border-radius:8px!important;box-shadow:0 18px 45px rgba(0,0,0,.28)!important}
    .cafe-photo img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;object-fit:cover!important;object-position:50% 72%!important;transform:none!important;display:block!important}
    .story-copy{position:relative!important;z-index:2!important;align-self:center!important}
    .story-copy h2{font-size:clamp(2.5rem,3.4vw,4.6rem)!important;line-height:.88!important;margin:10px 0 24px!important;letter-spacing:-.035em!important}
    .story-copy>p:not(.script){font-size:.9rem!important;line-height:1.7!important;max-width:560px!important}
    .story-copy .cta{margin-top:10px!important}
    .polaroid{width:100%!important;max-width:285px!important;justify-self:end!important;transform:rotate(5deg)!important;padding:11px 11px 18px!important;overflow:hidden!important}
    .polaroid-photo{height:235px!important;position:relative!important;overflow:hidden!important;background:#2d1b12!important;display:block!important}
    .restaurant-polaroid img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;object-fit:cover!important;object-position:78% 72%!important;transform:none!important;display:block!important}
    .polaroid em{font-size:1.05rem!important;margin-top:12px!important}

    .visit-section .thanks{width:250px!important;height:150px!important;max-width:none!important;padding:30px!important;justify-self:center!important;align-self:center!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:1.35rem!important;line-height:1.45!important;border-radius:48% 52% 45% 55%!important;transform:rotate(8deg)!important}

    @media(max-width:1050px){
      .story-section{grid-template-columns:1.15fr .85fr!important;min-height:auto!important}
      .polaroid{display:none!important}
      .cafe-scene{height:360px!important}
      .cafe-photo img{object-position:50% 72%!important}
      .visit-section .thanks{width:220px!important;height:135px!important}
    }
    @media(max-width:760px){
      .story-section{grid-template-columns:1fr!important;padding:34px 20px 48px!important}
      .cafe-scene{height:285px!important;order:1!important}
      .story-copy{order:2!important}
      .cafe-photo img{object-position:50% 72%!important}
      .story-copy h2{font-size:2.55rem!important}
      .visit-section .thanks{width:210px!important;height:125px!important;justify-self:start!important;font-size:1.15rem!important}
    }

    @keyframes mareaTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  `;
  document.head.appendChild(style);
});