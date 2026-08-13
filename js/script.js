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
  if (contactCopy) {
    var contactKicker = contactCopy.querySelector('.contact-kicker');
    var contactHeading = contactCopy.querySelector('h2');
    var contactParagraph = contactCopy.querySelector('p:not(.section-kicker)');
    if (contactKicker) contactKicker.textContent = 'Start a project';
    if (contactHeading) contactHeading.textContent = "Tell us what you're looking to build.";
    if (contactParagraph) contactParagraph.textContent = 'Share a few details about your business, your current website, and what you need. We will review your inquiry and reach out with the best next step.';
    var existingContactEmail = contactCopy.querySelector('.contact-email');
    if (existingContactEmail) {
      existingContactEmail.href = 'mailto:webrellacontact@gmail.com';
      existingContactEmail.textContent = 'webrellacontact@gmail.com';
    } else {
      var emailLine = document.createElement('p');
      emailLine.className = 'contact-email';
      emailLine.innerHTML = 'Prefer email? <a href="mailto:webrellacontact@gmail.com">webrellacontact@gmail.com</a>';
      contactCopy.appendChild(emailLine);
    }
  }

  var contactForm = document.querySelector('.contact-form');
  if (contactForm && !contactForm.dataset.projectIntakeUpgraded) {
    contactForm.dataset.projectIntakeUpgraded = 'true';
    contactForm.innerHTML = `
      <input type="hidden" name="_subject" value="New Webrella project inquiry">
      <div class="form-grid">
        <div class="form-row">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required>
        </div>
        <div class="form-row">
          <label for="company">Business</label>
          <input id="company" name="company" type="text" placeholder="Business name" required>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required>
        </div>
        <div class="form-row">
          <label for="phone">Phone <span style="font-weight:500;opacity:.65">(optional)</span></label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555">
        </div>
      </div>
      <div class="form-row">
        <label for="website">Existing website <span style="font-weight:500;opacity:.65">(optional)</span></label>
        <input id="website" name="existing_website" type="url" placeholder="https://yourbusiness.com">
      </div>
      <div class="form-grid">
        <div class="form-row">
          <label for="project-type">What do you need?</label>
          <select id="project-type" name="project_type" required>
            <option value="" selected disabled>Select a service</option>
            <option>New website</option>
            <option>Website redesign</option>
            <option>Landing page</option>
            <option>Website care / updates</option>
            <option>Menus & brand materials</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div class="form-row">
          <label for="budget">Approximate budget</label>
          <select id="budget" name="budget">
            <option value="" selected>Not sure yet</option>
            <option>$200–$500</option>
            <option>$500–$1,000</option>
            <option>$1,000–$2,500</option>
            <option>$2,500+</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <label for="timeline">Target launch</label>
        <input id="timeline" name="target_launch" type="text" placeholder="Example: October 2026 or No rush">
      </div>
      <div class="form-row">
        <label for="message">Project details</label>
        <textarea id="message" name="message" rows="6" placeholder="Tell us about your business, what you want the website to do, and any features or ideas you have in mind." required></textarea>
      </div>
      <div class="form-actions">
        <button class="btn btn-light" type="submit">Send project inquiry <span>↗</span></button>
      </div>`;

    contactForm.querySelectorAll('select').forEach(function (select) {
      select.style.width = '100%';
      select.style.minHeight = '52px';
      select.style.padding = '0 14px';
      select.style.border = '1px solid rgba(255,255,255,.28)';
      select.style.borderRadius = '0';
      select.style.background = 'transparent';
      select.style.color = '#fff';
      select.style.font = 'inherit';
      select.style.outline = 'none';
    });
    contactForm.querySelectorAll('select option').forEach(function (option) {
      option.style.color = '#111';
    });
  }

  if (contactForm && !contactForm.querySelector('.form-privacy-note')) {
    var privacyNote = document.createElement('p');
    privacyNote.className = 'form-privacy-note';
    privacyNote.style.cssText = 'margin:12px 0 0;font-size:.76rem;line-height:1.5;color:rgba(255,255,255,.72)';
    privacyNote.innerHTML = 'By submitting this form, you agree that Webrella may use the information you provide to respond to your inquiry. Please do not send passwords or sensitive financial information. <a href="privacy.html" style="color:inherit;font-weight:800">Privacy Policy</a>';
    contactForm.appendChild(privacyNote);
  }

  var footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom && !footerBottom.querySelector('.footer-email')) {
    var footerEmail = document.createElement('a');
    footerEmail.className = 'footer-email';
    footerEmail.href = 'mailto:webrellacontact@gmail.com';
    footerEmail.textContent = 'webrellacontact@gmail.com';
    footerBottom.appendChild(footerEmail);
  }
  var footerLinks = document.querySelector('.footer-links');
  if (footerLinks) {
    footerLinks.querySelectorAll('a[href="mailto:contact@webrellastudio.com"]').forEach(function (link) {
      link.href = 'mailto:webrellacontact@gmail.com';
    });
  }
  if (footerLinks && !footerLinks.querySelector('a[href="privacy.html"]')) {
    var privacyLink = document.createElement('a');
    privacyLink.href = 'privacy.html';
    privacyLink.textContent = 'Privacy';
    footerLinks.appendChild(privacyLink);
    var termsLink = document.createElement('a');
    termsLink.href = 'terms.html';
    termsLink.textContent = 'Terms';
    footerLinks.appendChild(termsLink);
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