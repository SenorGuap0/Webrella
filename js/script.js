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
