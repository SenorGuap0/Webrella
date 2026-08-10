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
  `;
  document.head.appendChild(contactStyle);
});