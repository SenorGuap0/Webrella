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

  ['css/process.css','css/pricing-faq.css'].forEach(function(href){
    var link=document.createElement('link'); link.rel='stylesheet'; link.href=href; document.head.appendChild(link);
  });

  var process = document.getElementById('process');
  if (process) {
    process.innerHTML = `<div class="container"><div class="section-heading process-heading"><p class="section-kicker blue-text">How it works</p><h2>A clear process from the first conversation to launch.</h2></div><div class="process-timeline">
      <article class="process-step"><span class="process-node" aria-hidden="true"></span><div class="process-card-detailed"><span class="process-number">01 / DISCOVERY</span><h3>We get to know your business</h3><p>We start by learning about your business, your audience, your goals, and what you want the website to accomplish. We also look at your current online presence, discuss the pages and features you need, and make sure the direction is clear before any design work begins.</p></div></article>
      <article class="process-step"><span class="process-node" aria-hidden="true"></span><div class="process-card-detailed"><span class="process-number">02 / DESIGN</span><h3>We shape the look and experience</h3><p>Once we understand the project, we create the visual direction for the website. This includes the layout, colors, typography, structure, and overall feel of the site. We share the design with you and make adjustments based on your feedback before moving into development.</p></div></article>
      <article class="process-step"><span class="process-node" aria-hidden="true"></span><div class="process-card-detailed"><span class="process-number">03 / DEVELOPMENT</span><h3>We turn the design into a website</h3><p>After the design is approved, we turn it into a working website. We focus on responsive layouts, clean functionality, performance, and making sure the site works properly across phones, tablets, and desktops. You can still review progress during this stage.</p></div></article>
      <article class="process-step"><span class="process-node" aria-hidden="true"></span><div class="process-card-detailed"><span class="process-number">04 / LAUNCH &amp; SUPPORT</span><h3>We test, launch, and stay available</h3><p>Before launch, we test the website, check the main links and forms, and make sure everything is ready to go live. We then help publish the site and make sure you understand how everything works. If you choose ongoing website care, we can also help with future updates and maintenance.</p></div></article>
    </div></div>`;
  }

  var emersonCard = document.querySelector('.founder-card.emerson .founder-info');
  if (emersonCard && !emersonCard.querySelector('.linkedin-link')) {
    var emersonLinkedIn = document.createElement('a');
    emersonLinkedIn.className='linkedin-link'; emersonLinkedIn.href='https://www.linkedin.com/in/emerson-martinez-umbc'; emersonLinkedIn.target='_blank'; emersonLinkedIn.rel='noopener noreferrer'; emersonLinkedIn.setAttribute('aria-label','View Emerson Martinez on LinkedIn'); emersonLinkedIn.innerHTML='<span class="linkedin-icon" aria-hidden="true">in</span><span>View LinkedIn</span><span aria-hidden="true">↗</span>'; emersonCard.appendChild(emersonLinkedIn);
  }

  var kidusCard = document.querySelector('.founder-card.kidus .founder-info');
  if (kidusCard) {
    var kidusName=kidusCard.querySelector('h3'); if(kidusName) kidusName.textContent='Kidus Fanta';
    var kidusPhoto=document.querySelector('.founder-card.kidus .founder-photo'); if(kidusPhoto) kidusPhoto.alt='Kidus Fanta';
    if (!kidusCard.querySelector('.linkedin-link')) {
      var kidusLinkedIn=document.createElement('a'); kidusLinkedIn.className='linkedin-link'; kidusLinkedIn.href='https://www.linkedin.com/in/kidus-fanta-976b28260/'; kidusLinkedIn.target='_blank'; kidusLinkedIn.rel='noopener noreferrer'; kidusLinkedIn.setAttribute('aria-label','View Kidus Fanta on LinkedIn'); kidusLinkedIn.innerHTML='<span class="linkedin-icon" aria-hidden="true">in</span><span>View LinkedIn</span><span aria-hidden="true">↗</span>'; kidusCard.appendChild(kidusLinkedIn);
    }
  }

  var contact=document.getElementById('contact');
  if(contact && !document.getElementById('pricing')){
    var pricing=document.createElement('section'); pricing.id='pricing'; pricing.className='pricing-section';
    pricing.innerHTML=`<div class="container"><div class="pricing-heading"><div><p class="section-kicker">Pricing</p><h2>Start simple. Grow when you are ready.</h2></div><p>Clear starting prices for small businesses that need a professional online presence without an oversized process.</p></div><div class="pricing-grid">
      <article class="price-card starter-card"><span class="price-label">Webrella Starter</span><h3>Your first professional website</h3><p class="price">$200 <small>starting at</small></p><p class="price-intro">A focused one page website designed to give your business a polished, trustworthy home online.</p><ul class="price-list"><li>Custom one page website</li><li>Desktop and mobile responsive design</li><li>Services, about, and contact sections</li><li>Basic contact form setup</li><li>Basic copywriting and content polishing</li><li>Two rounds of revisions</li><li>Domain and hosting connection assistance</li><li>Typical turnaround of 1 to 2 weeks after content is received</li></ul><a class="btn btn-dark" href="#contact">Start Your Website <span>↗</span></a></article>
      <article class="price-card care-card"><span class="price-label">Webrella Care</span><h3>Support after launch</h3><p class="price">$40 <small>/ month</small></p><p class="price-intro">For businesses that want someone available to keep the essentials current and working.</p><ul class="price-list"><li>Up to two update requests each month</li><li>Small text and photo changes</li><li>Hours, services, and contact updates</li><li>Minor website fixes</li><li>Basic monthly website checks</li><li>Priority support for routine requests</li></ul><a class="btn btn-ghost" href="#contact">Ask About Website Care</a></article>
    </div><div class="pricing-note"><p><strong>Need something different?</strong> Additional pages, redesigns, pay as you go updates, and other requests are quoted based on the project.</p><a class="btn btn-light" href="#contact">Tell us what you need</a></div></div>`;

    var faq=document.createElement('section'); faq.id='faq'; faq.className='faq-section';
    var questions=[
      ['How much does a website cost?','Our Webrella Starter websites begin at $200. This includes a professionally designed one page website built for desktop and mobile. If your project requires additional pages or features, we will discuss what you need and provide a quote before any work begins.'],
      ['How long does it take to build my website?','Most Starter websites take around 1 to 2 weeks once we have everything we need from you. If your project requires more time, we will let you know before we begin.'],
      ['What do I need to provide?','We will need basic information about your business, your services, contact information, your logo if you have one, and any photos you would like us to use. Do not worry if your wording is not perfect. We can help organize and polish the information you provide into website copy.'],
      ['How does payment work?','We require 50% upfront to begin the project and the remaining 50% before the website goes live. Any additional work outside the original project scope will be discussed with you before we make changes or charge anything additional.'],
      ['Can I request changes to the design?','Of course. Webrella Starter includes two rounds of revisions so we can make adjustments based on your feedback before launch.'],
      ['Do I own my website and domain?','Yes. Your domain and any paid hosting accounts belong to you. We can help you purchase, configure, and connect everything so you do not have to figure out the technical setup alone.'],
      ['What happens after my website launches?','You can manage the website independently, request updates whenever you need them, or choose Webrella Care for $40 per month. Webrella Care includes minor website updates, fixes, basic website checks, and up to two update requests each month.'],
      ['What if I only need an occasional update?','You do not need a monthly plan. We also offer pay as you go website care, with each request quoted based on the work involved.'],
      ['Can you redesign my existing website?','Yes. If you already have a website that needs a cleaner or more modern look, we can review it and determine what makes the most sense. Redesign projects are quoted individually depending on the website.'],
      ['Do you build online stores or more advanced websites?','Right now, Webrella is focused primarily on professional websites for small businesses. As we expand our services, we plan to offer more advanced website functionality. If you are unsure whether your project is something we can handle, reach out and we will tell you before you commit to anything.']
    ];
    faq.innerHTML='<div class="container faq-layout"><div class="faq-heading"><p class="section-kicker blue-text">FAQ</p><h2>Questions before we get started?</h2><p>Here are the things most clients will want to know before starting a project with us.</p></div><div class="faq-list">'+questions.map(function(q,i){return '<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-'+i+'"><span>'+q[0]+'</span><span class="faq-plus" aria-hidden="true">+</span></button><div class="faq-answer" id="faq-answer-'+i+'">'+q[1]+'</div></article>';}).join('')+'</div></div>';
    contact.parentNode.insertBefore(pricing,contact); contact.parentNode.insertBefore(faq,contact);
    document.querySelectorAll('.faq-question').forEach(function(button){button.addEventListener('click',function(){var item=button.closest('.faq-item');var open=item.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});});
  }

  var style=document.createElement('style');
  style.textContent=`.linkedin-link{display:inline-flex;align-items:center;gap:9px;width:max-content;margin-top:18px;padding:10px 14px;border:1px solid rgba(23,23,23,.12);border-radius:999px;background:#fff;color:#171717;text-decoration:none;font-size:.78rem;font-weight:850;transition:.2s ease}.linkedin-link:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.08);background:#f6f8fa}.linkedin-icon{display:grid;place-items:center;width:23px;height:23px;border-radius:6px;background:#0a66c2;color:#fff;font-size:.7rem;font-weight:900}`;
  document.head.appendChild(style);
});