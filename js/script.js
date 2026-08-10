document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-navigation');

  if (btn && nav) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('#year').forEach(function (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = button.closest('.faq-item');
      var open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  var headerInner = document.querySelector('.header-inner');
  if (headerInner && !headerInner.querySelector('.header-wordmark')) {
    var wordmark = document.createElement('a');
    wordmark.className = 'header-wordmark';
    wordmark.href = 'index.html';
    wordmark.textContent = 'webrella';
    wordmark.setAttribute('aria-label', 'Webrella home');
    headerInner.appendChild(wordmark);
  }

  var contactCopy = document.querySelector('.contact-copy');
  if (contactCopy && !contactCopy.querySelector('.contact-email')) {
    var emailLine = document.createElement('p');
    emailLine.className = 'contact-email';
    emailLine.innerHTML = 'Prefer email? <a href="mailto:webrellacontact@gmail.com">webrellacontact@gmail.com</a>';
    contactCopy.appendChild(emailLine);
  }

  var footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom && !footerBottom.querySelector('.footer-email')) {
    var footerEmail = document.createElement('a');
    footerEmail.className = 'footer-email';
    footerEmail.href = 'mailto:webrellacontact@gmail.com';
    footerEmail.textContent = 'webrellacontact@gmail.com';
    footerBottom.appendChild(footerEmail);
  }

  var contactStyle = document.createElement('style');
  contactStyle.textContent = `
    .contact-email{margin-top:18px!important;color:#fff!important;font-size:.95rem}
    .contact-email a{color:#fff;font-weight:800;text-underline-offset:3px}
    .footer-email{color:#b8b8b1;text-decoration:none;font-size:.85rem}
    .footer-email:hover{color:#fff}

    @media(min-width:1121px){
      .header-inner{display:grid!important;grid-template-columns:1fr auto 1fr;align-items:center;position:relative;max-width:none!important;width:calc(100% - 64px)!important}
      .brand{grid-column:1;grid-row:1;justify-self:start}
      .header-wordmark{grid-column:2;grid-row:1;position:static!important;transform:none!important;justify-self:center;z-index:2;color:#171717;text-decoration:none;font-size:2.3rem;font-weight:900;letter-spacing:-.06em;line-height:1;white-space:nowrap;transition:transform .2s ease,opacity .2s ease}
      .header-wordmark:hover{transform:scale(1.04)!important;opacity:.72}
      .site-nav{grid-column:3;grid-row:1;justify-self:end;margin-left:0!important;transform:translateX(0)}
      .site-nav ul{justify-content:flex-end;gap:8px;width:max-content}
      .site-nav a{white-space:nowrap}
      .site-nav .nav-cta{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 19px!important;border-radius:999px;line-height:1;white-space:nowrap;margin-left:12px!important}
      .nav-toggle{grid-column:3;grid-row:1;justify-self:end}
    }

    .logo-panel{transition:transform .42s cubic-bezier(.2,.8,.2,1),box-shadow .42s ease,filter .42s ease;will-change:transform}
    .logo-panel img{transition:transform .42s cubic-bezier(.2,.8,.2,1),filter .42s ease}
    .floating-chip{transition:transform .36s cubic-bezier(.2,.8,.2,1),box-shadow .36s ease}
    .hero-art:hover .logo-panel{transform:rotate(-1deg) translateY(-8px) scale(1.025);box-shadow:0 48px 95px rgba(28,28,25,.18);filter:saturate(1.06)}
    .hero-art:hover .logo-panel img{transform:scale(1.035)}
    .hero-art:hover .chip-one{transform:translate(-10px,-8px) rotate(-2deg);box-shadow:0 20px 42px rgba(0,0,0,.12)}
    .hero-art:hover .chip-two{transform:translate(10px,8px) rotate(2deg);box-shadow:0 20px 42px rgba(0,0,0,.12)}
    @media(max-width:1280px) and (min-width:1121px){
      .header-inner{width:calc(100% - 36px)!important}
      .header-wordmark{font-size:2rem}
      .site-nav ul{gap:2px}
      .site-nav a{padding-left:8px;padding-right:8px;font-size:.82rem}
      .site-nav .nav-cta{min-height:44px;padding:0 16px!important;margin-left:7px!important}
    }
    @media(max-width:1120px){.header-wordmark{display:none}}
    @media (prefers-reduced-motion:reduce){.logo-panel,.logo-panel img,.floating-chip,.header-wordmark{transition:none!important}.hero-art:hover .logo-panel,.hero-art:hover .logo-panel img,.hero-art:hover .floating-chip{transform:none!important}}
  `;
  document.head.appendChild(contactStyle);
});