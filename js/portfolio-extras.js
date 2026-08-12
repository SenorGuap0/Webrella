document.addEventListener('DOMContentLoaded', function () {
  var workGrid = document.querySelector('#work .project-grid');
  if (!workGrid || document.querySelector('.portfolio-extra-showcase')) return;

  var style = document.createElement('style');
  style.textContent = `
    .portfolio-extra-showcase{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:8px}
    .extra-sample{border:1px solid #303030;border-radius:28px;overflow:hidden;background:#181818;color:#fff}
    .extra-sample-stage{min-height:520px;padding:34px;display:grid;place-items:center;position:relative;overflow:hidden}
    .extra-sample-copy{padding:28px 30px 32px;border-top:1px solid #303030}
    .extra-sample-copy span{display:block;margin-bottom:8px;font-size:.7rem;font-weight:850;letter-spacing:.12em;text-transform:uppercase;color:#a9a9a3}
    .extra-sample-copy h3{margin:0 0 10px;font-size:1.55rem;color:#fff}
    .extra-sample-copy p{margin:0;color:#aaa9a4;line-height:1.65}
    .stonecrest-poster-stage{background:linear-gradient(145deg,#161616 0 64%,#d96033 64% 78%,#cfcac0 78%)}
    .poster-sheet{width:min(350px,82%);aspect-ratio:3/4;background:#171717;border:1px solid #45433f;box-shadow:0 32px 70px rgba(0,0,0,.45);padding:30px;transform:rotate(-2deg);display:flex;flex-direction:column;justify-content:space-between;transition:.3s ease}
    .stonecrest-poster-stage:hover .poster-sheet{transform:rotate(0deg) translateY(-7px)}
    .poster-brand{font-size:.72rem;font-weight:900;letter-spacing:.12em;color:#d96033}.poster-title{font-size:clamp(2rem,4vw,3.2rem);line-height:.9;font-weight:950;letter-spacing:-.06em;text-transform:uppercase}.poster-title em{display:block;color:#d8b179;font-style:normal}.poster-services{font-size:.68rem;line-height:1.8;letter-spacing:.08em;text-transform:uppercase;color:#d0cec8}.poster-footer{display:flex;justify-content:space-between;align-items:end;border-top:1px solid #494743;padding-top:16px}.poster-footer strong{font-size:.75rem;color:#fff}.poster-qr{width:58px;height:58px;background:repeating-linear-gradient(45deg,#fff 0 4px,#111 4px 8px);border:6px solid #fff}
    .nexora-ui-stage{background:radial-gradient(circle at 80% 15%,rgba(183,255,50,.16),transparent 28%),#050705}
    .ai-window{width:94%;max-width:620px;min-height:410px;border:1px solid #263024;border-radius:18px;background:#090c09;box-shadow:0 35px 80px rgba(0,0,0,.55),0 0 50px rgba(183,255,50,.08);display:grid;grid-template-columns:150px 1fr;overflow:hidden;transform:rotate(1deg);transition:.3s ease}
    .nexora-ui-stage:hover .ai-window{transform:rotate(0deg) translateY(-7px)}
    .ai-side{padding:20px 14px;border-right:1px solid #20291f;background:#070907}.ai-logo{font:900 1rem/1 monospace;color:#b7ff32;margin-bottom:28px}.ai-nav{display:grid;gap:9px}.ai-nav i{height:28px;border:1px solid #20291f;border-radius:7px;display:flex;align-items:center;padding:0 9px;font-style:normal;font:600 .56rem/1 monospace;color:#8e998a}.ai-nav i:first-child{border-color:#b7ff32;color:#b7ff32;background:rgba(183,255,50,.06)}
    .ai-main{padding:25px}.ai-status{font:700 .55rem/1 monospace;color:#b7ff32;letter-spacing:.1em}.ai-main h4{margin:24px 0 6px;font-size:1.45rem}.ai-main>p{margin:0 0 22px;color:#747d72;font-size:.72rem}.ai-prompt{border:1px solid #263024;border-radius:12px;padding:15px;color:#a7afa3;font-size:.72rem;background:#0c100c}.ai-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:15px}.ai-actions b{padding:11px 8px;border:1px solid #20291f;border-radius:9px;font:600 .54rem/1.3 monospace;color:#9ba497}.ai-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px}.ai-metrics div{border-top:1px solid #20291f;padding-top:10px}.ai-metrics strong{display:block;color:#b7ff32;font:800 1rem/1 monospace}.ai-metrics small{color:#657062;font:.5rem/1 monospace}
    @media(max-width:850px){.portfolio-extra-showcase{grid-template-columns:1fr}.extra-sample-stage{min-height:460px}.ai-window{grid-template-columns:110px 1fr}.ai-side{padding:16px 10px}}
    @media(max-width:520px){.extra-sample-stage{padding:18px;min-height:400px}.poster-sheet{width:86%;padding:22px}.ai-window{width:100%;grid-template-columns:82px 1fr;min-height:350px}.ai-main{padding:18px 12px}.ai-actions{grid-template-columns:1fr}.ai-nav i{font-size:.48rem;padding:0 5px}}
  `;
  document.head.appendChild(style);

  var section = document.createElement('div');
  section.className = 'portfolio-extra-showcase';
  section.innerHTML = `
    <article class="extra-sample">
      <div class="extra-sample-stage stonecrest-poster-stage">
        <div class="poster-sheet" role="img" aria-label="Stonecrest Concrete promotional poster concept">
          <div><div class="poster-brand">STONECREST CONCRETE</div><div class="poster-title">Quality work.<em>Solid results.</em></div></div>
          <div class="poster-services">Driveways · Patios · Sidewalks<br>Foundations · Residential · Commercial</div>
          <div class="poster-footer"><strong>GET A FREE ESTIMATE</strong><span class="poster-qr" aria-hidden="true"></span></div>
        </div>
      </div>
      <div class="extra-sample-copy"><span>Graphic design concept</span><h3>Stonecrest Promotional Poster</h3><p>A print-ready advertising direction that extends the contractor brand beyond the website while keeping the same bold visual system.</p></div>
    </article>
    <article class="extra-sample">
      <div class="extra-sample-stage nexora-ui-stage">
        <div class="ai-window" role="img" aria-label="Nexora AI product dashboard interface concept">
          <aside class="ai-side"><div class="ai-logo">NEXORA°</div><div class="ai-nav"><i>NEW CHAT</i><i>DASHBOARD</i><i>KNOWLEDGE</i><i>FILES</i><i>ANALYTICS</i></div></aside>
          <div class="ai-main"><div class="ai-status">● SYSTEM ONLINE</div><h4>Welcome back.</h4><p>What can Nexora help you build today?</p><div class="ai-prompt">Ask Nexora anything...</div><div class="ai-actions"><b>ANALYZE FILES</b><b>BUILD WORKFLOW</b><b>RESEARCH</b></div><div class="ai-metrics"><div><strong>24</strong><small>ACTIVE WORKFLOWS</small></div><div><strong>98.7%</strong><small>SYSTEM UPTIME</small></div></div></div>
        </div>
      </div>
      <div class="extra-sample-copy"><span>UI / product design concept</span><h3>NEXORA° AI Interface</h3><p>A product dashboard concept showing how the NEXORA° identity could extend from a marketing website into a usable AI workspace.</p></div>
    </article>`;

  var nexora = workGrid.querySelector('.nexora-showcase-card');
  if (nexora) nexora.insertAdjacentElement('afterend', section);
  else workGrid.appendChild(section);
});