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
      art.style.transform='translate('+x*10+'px,'+y*10+'px)';
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

    .hero-art{position:relative!important;min-height:620px!important;isolation:isolate!important}
    .hero-art .pink-blob{left:8%!important;top:6%!important;width:126%!important;height:112%!important;border-radius:52% 0 0 42%!important;transform:rotate(-7deg)!important}
    .hero-photo-card{position:absolute!important;z-index:4!important;background:#fff6df!important;border:4px solid var(--brown)!important;box-shadow:14px 16px 0 rgba(50,21,13,.22)!important;overflow:hidden!important;transition:transform .25s ease,box-shadow .25s ease!important}
    .hero-photo-card img{width:100%!important;height:100%!important;display:block!important;object-fit:cover!important}
    .hero-photo-card:hover{box-shadow:20px 22px 0 rgba(50,21,13,.26)!important}
    .hero-drink-card{width:48%!important;height:66%!important;left:19%!important;top:17%!important;border-radius:22px!important;transform:rotate(-4deg)!important}
    .hero-drink-card:hover{transform:rotate(-1deg) translateY(-6px)!important}
    .hero-drink-card img{object-position:center 46%!important}
    .hero-pastry-card{width:30%!important;height:36%!important;right:5%!important;bottom:8%!important;border-radius:18px!important;transform:rotate(8deg)!important}
    .hero-pastry-card:hover{transform:rotate(4deg) translateY(-5px)!important}
    .hero-pastry-card img{object-position:center!important}
    .hero-photo-label{position:absolute!important;left:14px!important;right:14px!important;bottom:14px!important;background:rgba(255,243,220,.94)!important;color:var(--brown)!important;border:2px solid var(--brown)!important;padding:10px 12px!important;display:flex!important;justify-content:space-between!important;align-items:center!important;gap:10px!important;box-shadow:4px 4px 0 var(--brown)!important}
    .hero-photo-label strong{font-size:.82rem!important;letter-spacing:.05em!important}.hero-photo-label span{font-size:.62rem!important;font-weight:900!important;letter-spacing:.08em!important}
    .hero-art .vibe-sticker{right:3%!important;top:12%!important;width:145px!important;height:145px!important;border-radius:50%!important;transform:rotate(7deg)!important;box-shadow:7px 8px 0 var(--brown)!important}
    .hero-art .hecho{left:9%!important;bottom:7%!important;width:126px!important;height:82px!important;border-radius:48% 52% 46% 54%!important;background:var(--yellow)!important;color:var(--brown)!important;font-family:'Shrikhand',cursive!important;font-size:1.05rem!important;line-height:1!important;box-shadow:6px 7px 0 var(--brown)!important;transform:rotate(-10deg)!important}
    .hero-star{position:absolute!important;z-index:7!important;font-family:'Shrikhand',cursive!important;color:var(--yellow)!important;text-shadow:3px 3px 0 var(--brown)!important}.star-one{font-size:4.2rem!important;left:13%!important;top:8%!important;transform:rotate(12deg)!important}.star-two{font-size:3rem!important;right:23%!important;top:5%!important;color:#fff!important;transform:rotate(-8deg)!important}

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

    @media(max-width:1050px){.hero-art{min-height:520px!important}.hero-drink-card{width:44%!important;left:22%!important}.hero-pastry-card{width:29%!important;right:7%!important}.story-section{grid-template-columns:1.15fr .85fr!important;min-height:auto!important}.polaroid{display:none!important}.cafe-scene{height:360px!important}.visit-section .thanks{width:220px!important;height:135px!important}}
    @media(max-width:760px){.hero-art{min-height:470px!important}.hero-drink-card{width:54%!important;height:62%!important;left:14%!important;top:18%!important}.hero-pastry-card{width:34%!important;height:31%!important;right:4%!important;bottom:7%!important}.hero-art .vibe-sticker{width:105px!important;height:105px!important;font-size:.76rem!important;right:2%!important;top:12%!important}.hero-art .hecho{width:100px!important;height:68px!important;font-size:.86rem!important;left:4%!important}.star-one{font-size:3rem!important;left:8%!important}.star-two{font-size:2.2rem!important;right:26%!important}.hero-photo-label{left:8px!important;right:8px!important;bottom:8px!important;padding:8px!important;flex-direction:column!important;align-items:flex-start!important;gap:2px!important}.story-section{grid-template-columns:1fr!important;padding:34px 20px 48px!important}.cafe-scene{height:285px!important;order:1!important}.story-copy{order:2!important}.story-copy h2{font-size:2.55rem!important}.visit-section .thanks{width:210px!important;height:125px!important;justify-self:start!important;font-size:1.15rem!important}}

    @keyframes mareaTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  `;
  document.head.appendChild(style);
});