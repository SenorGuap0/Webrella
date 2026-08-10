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

  // Add LinkedIn profiles to the founder cards and use Kidus's full name.
  var emersonCard = document.querySelector('.founder-card.emerson .founder-info');
  if (emersonCard && !emersonCard.querySelector('.linkedin-link')) {
    var emersonLinkedIn = document.createElement('a');
    emersonLinkedIn.className = 'linkedin-link';
    emersonLinkedIn.href = 'https://www.linkedin.com/in/emerson-martinez-umbc';
    emersonLinkedIn.target = '_blank';
    emersonLinkedIn.rel = 'noopener noreferrer';
    emersonLinkedIn.setAttribute('aria-label', 'View Emerson Martinez on LinkedIn');
    emersonLinkedIn.innerHTML = '<span class="linkedin-icon" aria-hidden="true">in</span><span>View LinkedIn</span><span aria-hidden="true">↗</span>';
    emersonCard.appendChild(emersonLinkedIn);
  }

  var kidusCard = document.querySelector('.founder-card.kidus .founder-info');
  if (kidusCard) {
    var kidusName = kidusCard.querySelector('h3');
    if (kidusName) kidusName.textContent = 'Kidus Fanta';
    var kidusPhoto = document.querySelector('.founder-card.kidus .founder-photo');
    if (kidusPhoto) kidusPhoto.alt = 'Kidus Fanta';

    if (!kidusCard.querySelector('.linkedin-link')) {
      var kidusLinkedIn = document.createElement('a');
      kidusLinkedIn.className = 'linkedin-link';
      kidusLinkedIn.href = 'https://www.linkedin.com/in/kidus-fanta-976b28260/';
      kidusLinkedIn.target = '_blank';
      kidusLinkedIn.rel = 'noopener noreferrer';
      kidusLinkedIn.setAttribute('aria-label', 'View Kidus Fanta on LinkedIn');
      kidusLinkedIn.innerHTML = '<span class="linkedin-icon" aria-hidden="true">in</span><span>View LinkedIn</span><span aria-hidden="true">↗</span>';
      kidusCard.appendChild(kidusLinkedIn);
    }
  }

  // Final logo sizing + footer contrast treatment and founder social styling.
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

    .linkedin-link{display:inline-flex;align-items:center;gap:9px;width:max-content;margin-top:18px;padding:10px 14px;border:1px solid rgba(23,23,23,.12);border-radius:999px;background:#fff;color:#171717;text-decoration:none;font-size:.78rem;font-weight:850;transition:transform .2s ease,box-shadow .2s ease,background .2s ease}
    .linkedin-link:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.08);background:#f6f8fa}
    .linkedin-icon{display:grid;place-items:center;width:23px;height:23px;border-radius:6px;background:#0a66c2;color:#fff;font-size:.7rem;font-weight:900;line-height:1}

    @media (max-width:720px){
      .brand{width:140px;height:54px}
      .brand-logo-crop{width:140px;height:54px}
      .brand-logo-crop .nav-logo{width:188px}
      .footer-mark{gap:10px}
      .footer-umbrella{width:72px;height:72px;flex-basis:72px}
      .footer-umbrella img{width:160px}
      .footer-wordmark strong{font-size:1.7rem}
      .footer-wordmark span{font-size:.47rem;letter-spacing:.13em}
    }
  `;
  document.head.appendChild(style);
});
