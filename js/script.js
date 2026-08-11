document.addEventListener('DOMContentLoaded', function () {
  var dynamicStyle = document.createElement('link');
  dynamicStyle.rel = 'stylesheet';
  dynamicStyle.href = 'css/dynamic.css?v=20260811-3';
  document.head.appendChild(dynamicStyle);

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

  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
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

  var servicesSection = document.querySelector('#services');
  if (servicesSection) {
    var servicesHeading = servicesSection.querySelector('.split-heading h2');
    var servicesIntro = servicesSection.querySelector('.split-heading > p');
    var servicesGrid = servicesSection.querySelector('.services-grid');
    if (servicesHeading) servicesHeading.textContent = 'Everything you need to make your business look polished.';
    if (servicesIntro) servicesIntro.textContent = 'From websites to the visuals that support them, we help small businesses keep their brand clear and consistent across digital and print.';
    if (servicesGrid && !servicesGrid.querySelector('.brand-design-card')) {
      var brandCard = document.createElement('article');
      brandCard.className = 'service-card brand-design-card blue-card';
      brandCard.innerHTML = '<div class="service-icon">04</div><h3>Menus & Brand Materials</h3><p>Custom menus, posters, flyers, social graphics, and other branded pieces designed to match the look and feel of your business.</p><span class="service-tag">Print + promotional design</span>';
      servicesGrid.appendChild(brandCard);
    }
  }

  var marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack && !marqueeTrack.textContent.includes('Menus & Posters')) {
    marqueeTrack.insertAdjacentHTML('beforeend', '<i></i><span>Menus & Posters</span><i></i><span>Brand Materials</span>');
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
          <div class="marea-preview-wrap"><img src="ChatGPT%20Image%20Aug%2010,%202026,%2007_00_49%20PM.png" alt="Marea Café website concept preview"></div>
        </a>`;
    }
    if (featuredMeta) {
      featuredMeta.innerHTML = `
        <div class="marea-project-title"><span>Fictional concept</span><h3>Marea Café</h3></div>
        <div class="marea-project-copy"><p>A colorful Latin-inspired café concept built around menu discovery, brand personality, and a responsive customer experience.</p><a class="project-live-link" href="marea/" target="_blank" rel="noopener">View live concept ↗</a></div>`;
    }

    var projectGrid = featuredProject.parentElement;
    if (projectGrid && !projectGrid.querySelector('.marea-brand-extension')) {
      var brandShowcase = document.createElement('article');
      brandShowcase.className = 'marea-brand-extension';
      brandShowcase.innerHTML = `
        <div class="marea-extension-copy">
          <span class="marea-extension-kicker">Beyond the website</span>
          <h3>A brand should feel consistent everywhere.</h3>
          <p>For Marea Café, we carried the same colors, typography, illustrations, and personality from the website into a full printed menu.</p>
          <div class="marea-extension-tag">Menu design · Print collateral · Brand consistency</div>
        </div>
        <div class="marea-menu-stage">
          <div class="marea-menu-paper">
            <img src="ChatGPT%20Image%20Aug%2010,%202026,%2011_22_22%20PM.png" alt="Full Marea Café printed menu design">
          </div>
          <span class="marea-menu-note">Menu design</span>
        </div>`;
      featuredProject.insertAdjacentElement('afterend', brandShowcase);
    }
  }

  var stonecrestLink = document.querySelector('#work .stonecrest-link');
  var stonecrestCard = null;
  if (stonecrestLink) {
    stonecrestCard = stonecrestLink.closest('.project-card');
    if (stonecrestCard) {
      stonecrestCard.classList.add('project-wide', 'stonecrest-showcase-card');
      var oldVisual = stonecrestCard.querySelector('.project-visual');
      var oldMeta = stonecrestCard.querySelector('.project-meta');
      if (oldVisual) {
        oldVisual.className = 'project-visual stonecrest-showcase-visual';
        oldVisual.innerHTML = `
          <a class="stonecrest-browser" href="stonecrest/" target="_blank" rel="noopener" aria-label="Open the Stonecrest Concrete concept website">
            <div class="stonecrest-browser-bar"><span></span><span></span><span></span><small>STONECREST CONCRETE</small></div>
            <div class="stonecrest-preview-wrap">
              <iframe src="stonecrest/" title="Stonecrest Concrete website preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
              <div class="stonecrest-preview-overlay"></div>
            </div>
          </a>`;
      }
      if (oldMeta) {
        oldMeta.className = 'project-meta stonecrest-showcase-meta';
        oldMeta.innerHTML = `
          <div class="stonecrest-project-title"><span>Fictional concept</span><h3>Stonecrest Concrete</h3></div>
          <div class="stonecrest-project-copy"><p>A bold Maryland contractor concept built around project credibility, clear services, homeowner trust, and estimate generation.</p><a class="project-live-link stonecrest-live-link" href="stonecrest/" target="_blank" rel="noopener">View live concept ↗</a></div>`;
      }
    }
  }

  var workGrid = document.querySelector('#work .project-grid');
  if (workGrid) {
    Array.from(workGrid.querySelectorAll('.project-card')).forEach(function (card) {
      var title = card.querySelector('h3');
      if (title && title.textContent.trim() === 'Harbor Goods') card.remove();
    });

    if (!workGrid.querySelector('.nexora-showcase-card')) {
      var nexoraCard = document.createElement('article');
      nexoraCard.className = 'project-card project-wide nexora-showcase-card';
      nexoraCard.innerHTML = `
        <div class="project-visual nexora-showcase-visual">
          <a class="nexora-browser" href="nexora/" target="_blank" rel="noopener" aria-label="Open the Nexora AI concept website">
            <div class="nexora-browser-bar"><span></span><span></span><span></span><small>NEXORA° / SYSTEM ONLINE</small></div>
            <div class="nexora-preview-wrap">
              <iframe src="nexora/" title="Nexora AI website preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
              <div class="nexora-preview-overlay"></div>
            </div>
          </a>
        </div>
        <div class="project-meta nexora-showcase-meta">
          <div class="nexora-project-title"><span>Fictional concept</span><h3>NEXORA°</h3></div>
          <div class="nexora-project-copy"><p>An experimental AI automation platform concept built around interactive workflows, live system visuals, motion, and an integrated AI assistant.</p><a class="project-live-link nexora-live-link" href="nexora/" target="_blank" rel="noopener">View live concept ↗</a></div>
        </div>`;
      if (stonecrestCard) stonecrestCard.insertAdjacentElement('afterend', nexoraCard);
      else workGrid.appendChild(nexoraCard);
    }
  }
});