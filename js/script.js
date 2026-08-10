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

  var featuredProject = document.querySelector('#work .project-card.project-wide');
  if (featuredProject) {
    var featuredVisual = featuredProject.querySelector('.project-visual');
    var featuredMeta = featuredProject.querySelector('.project-meta');

    if (featuredVisual) {
      featuredVisual.classList.remove('bloom-visual');
      featuredVisual.classList.add('marea-visual');
      featuredVisual.innerHTML = `
        <a class="marea-browser" href="marea/" target="_blank" rel="noopener" aria-label="Open the Marea Cafe concept website">
          <div class="marea-browser-bar"><span></span><span></span><span></span><small>marea café</small></div>
          <div class="marea-preview-wrap">
            <img src="ChatGPT%20Image%20Aug%2010,%202026,%2007_00_49%20PM.png" alt="Marea Café website concept preview">
            <div class="marea-preview-badge">View live site ↗</div>
          </div>
        </a>`;
    }

    if (featuredMeta) {
      featuredMeta.innerHTML = `
        <div class="marea-project-title"><span>Fictional concept</span><h3>Marea Café</h3></div>
        <div class="marea-project-copy"><p>A colorful Latin-inspired café concept built around menu discovery, brand personality, and a responsive customer experience.</p><a class="project-live-link" href="marea/" target="_blank" rel="noopener">View live concept ↗</a></div>`;
    }
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

    .marea-visual{display:grid!important;place-items:center!important;padding:36px!important;background:linear-gradient(135deg,#f43b68 0%,#ffbe28 52%,#43bbae 100%)!important}
    .marea-browser{display:block;width:88%;height:82%;overflow:hidden;border-radius:18px;background:#fff3dc;text-decoration:none;box-shadow:0 30px 70px rgba(0,0,0,.32);transform:rotate(-1.2deg);transition:transform .3s ease,box-shadow .3s ease}
    .marea-browser:hover{transform:rotate(0deg) translateY(-7px) scale(1.015);box-shadow:0 38px 90px rgba(0,0,0,.38)}
    .marea-browser-bar{height:36px;display:flex;align-items:center;gap:7px;padding:0 13px;background:#fff8e9;border-bottom:1px solid rgba(50,21,13,.15)}
    .marea-browser-bar span{width:8px;height:8px;border-radius:50%;background:#ef3741}.marea-browser-bar span:nth-child(2){background:#ffce55}.marea-browser-bar span:nth-child(3){background:#92bd70}
    .marea-browser-bar small{margin-left:auto;color:#5a463e;font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em}
    .marea-preview-wrap{position:relative;height:calc(100% - 36px);overflow:hidden;background:#fff3dc}
    .marea-preview-wrap img{width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .4s ease}
    .marea-browser:hover .marea-preview-wrap img{transform:scale(1.025)}
    .marea-preview-badge{position:absolute;right:18px;bottom:18px;padding:10px 14px;border-radius:999px;background:#171717;color:#fff;font-size:.7rem;font-weight:850;box-shadow:0 8px 24px rgba(0,0,0,.22)}
    .project-wide .project-meta{grid-template-columns:1fr 1fr!important;gap:56px!important;align-items:center!important;padding:34px 30px!important;min-height:180px!important}
    .marea-project-title,.marea-project-copy{width:100%;max-width:390px}
    .marea-project-title{justify-self:start}
    .marea-project-copy{justify-self:end;display:flex;flex-direction:column;align-items:flex-start;gap:15px}
    .marea-project-title span{margin-bottom:8px!important}
    .marea-project-title h3{margin:0!important}
    .marea-project-copy p{margin:0!important;max-width:390px!important}
    .project-live-link{display:inline-flex;align-items:center;color:#fff;text-decoration:none;font-size:.75rem;font-weight:850;border-bottom:1px solid rgba(255,255,255,.5);padding-bottom:3px;transition:.2s ease}
    .project-live-link:hover{color:#ffce55;border-color:#ffce55;transform:translateX(3px)}

    @media(max-width:1280px) and (min-width:1121px){
      .header-inner{width:calc(100% - 36px)!important}
      .header-wordmark{font-size:2rem}
      .site-nav ul{gap:2px}
      .site-nav a{padding-left:8px;padding-right:8px;font-size:.82rem}
      .site-nav .nav-cta{min-height:44px;padding:0 16px!important;margin-left:7px!important}
    }
    @media(max-width:1120px){.header-wordmark{display:none}}
    @media(max-width:760px){.marea-visual{padding:22px!important}.marea-browser{width:96%;height:88%}.marea-preview-badge{right:10px;bottom:10px;font-size:.62rem;padding:8px 11px}.project-wide .project-meta{grid-template-columns:1fr!important;gap:18px!important;align-items:start!important}.marea-project-title,.marea-project-copy{max-width:none!important;justify-self:start!important}.marea-project-copy{gap:10px}}
    @media (prefers-reduced-motion:reduce){.logo-panel,.logo-panel img,.floating-chip,.header-wordmark,.marea-browser,.marea-preview-wrap img,.project-live-link{transition:none!important}.hero-art:hover .logo-panel,.hero-art:hover .logo-panel img,.hero-art:hover .floating-chip,.marea-browser:hover,.marea-browser:hover .marea-preview-wrap img,.project-live-link:hover{transform:none!important}}
  `;
  document.head.appendChild(contactStyle);
});