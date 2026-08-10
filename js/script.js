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

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Keep founder display names current.
  document.querySelectorAll('.founder-card.kidus h3').forEach(function (name) {
    name.textContent = 'Kidus Fanta';
  });

  // Load the expanded process timeline styles.
  var processStyles = document.createElement('link');
  processStyles.rel = 'stylesheet';
  processStyles.href = 'css/process.css';
  document.head.appendChild(processStyles);

  // Expand the How It Works section into a four-stage client journey.
  var process = document.getElementById('process');
  if (process) {
    process.innerHTML = `
      <div class="container">
        <div class="section-heading process-heading">
          <p class="section-kicker blue-text">How it works</p>
          <h2>A clear process from the first conversation to launch.</h2>
        </div>
        <div class="process-timeline">
          <article class="process-step">
            <span class="process-node" aria-hidden="true"></span>
            <div class="process-card-detailed">
              <span class="process-number">01 / DISCOVERY</span>
              <h3>We get to know your business</h3>
              <p>We start by learning about your business, your audience, your goals, and what you want the website to accomplish. We also look at your current online presence, discuss the pages and features you need, and make sure the direction is clear before any design work begins.</p>
            </div>
          </article>
          <article class="process-step">
            <span class="process-node" aria-hidden="true"></span>
            <div class="process-card-detailed">
              <span class="process-number">02 / DESIGN</span>
              <h3>We shape the look and experience</h3>
              <p>Once we understand the project, we create the visual direction for the website. This includes the layout, colors, typography, structure, and overall feel of the site. We share the design with you and make adjustments based on your feedback before moving into development.</p>
            </div>
          </article>
          <article class="process-step">
            <span class="process-node" aria-hidden="true"></span>
            <div class="process-card-detailed">
              <span class="process-number">03 / DEVELOPMENT</span>
              <h3>We turn the design into a website</h3>
              <p>After the design is approved, we turn it into a working website. We focus on responsive layouts, clean functionality, performance, and making sure the site works properly across phones, tablets, and desktops. You can still review progress during this stage.</p>
            </div>
          </article>
          <article class="process-step">
            <span class="process-node" aria-hidden="true"></span>
            <div class="process-card-detailed">
              <span class="process-number">04 / LAUNCH &amp; SUPPORT</span>
              <h3>We test, launch, and stay available</h3>
              <p>Before launch, we test the website, check the main links and forms, and make sure everything is ready to go live. We then help publish the site and make sure you understand how everything works. If you choose ongoing website care, we can also help with future updates and maintenance.</p>
            </div>
          </article>
        </div>
      </div>`;
  }

  // Final logo sizing + footer contrast treatment.
  var style = document.createElement('style');
  style.textContent = `
    .brand{width:170px;height:64px;overflow:hidden;display:flex;align-items:center}
    .brand-logo-crop{display:block;position:relative;width:170px;height:64px;overflow:hidden}
    .brand-logo-crop .nav-logo{position:absolute;width:225px;max-width:none;height:auto;left:50%;top:50%;transform:translate(-50%,-49%)}
    .footer-mark{display:flex;align-items:center;gap:14px;min-height:94px}
    .footer-umbrella{position:relative;display:block;width:86px;height:86px;overflow:hidden;flex:0 0 86px}
    .footer-umbrella img{position:absolute;width:190px;max-width:none;height:auto;left:50%;top:34%;transform:translate(-50%,-50%)}
    .footer-wordmark{display:flex;flex-direction:column;gap:3px}
    .footer-wordmark strong{color:#fff;font-size:2rem;line-height:.95;letter-spacing:-.055em;font-weight:900}
    .footer-wordmark span{color:#fff;font-size:.56rem;font-weight:800;letter-spacing:.18em;white-space:nowrap}
    @media (max-width:720px){.brand{width:140px;height:54px}.brand-logo-crop{width:140px;height:54px}.brand-logo-crop .nav-logo{width:188px}.footer-mark{gap:10px}.footer-umbrella{width:72px;height:72px;flex-basis:72px}.footer-umbrella img{width:160px}.footer-wordmark strong{font-size:1.7rem}.footer-wordmark span{font-size:.47rem;letter-spacing:.13em}}
  `;
  document.head.appendChild(style);
});
