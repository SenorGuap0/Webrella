document.addEventListener('DOMContentLoaded', function () {
  var workGrid = document.querySelector('#work .project-grid');
  if (!workGrid || document.querySelector('.portfolio-extra-showcase')) return;

  var style = document.createElement('style');
  style.textContent = `
    .portfolio-extra-showcase{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:8px}
    .extra-sample{border:1px solid #303030;border-radius:28px;overflow:hidden;background:#181818;color:#fff}
    .extra-sample-stage{height:590px;padding:30px;display:grid;place-items:center;position:relative;overflow:hidden}
    .extra-sample-copy{padding:28px 30px 32px;border-top:1px solid #303030}
    .extra-sample-copy span{display:block;margin-bottom:8px;font-size:.7rem;font-weight:850;letter-spacing:.12em;text-transform:uppercase;color:#a9a9a3}
    .extra-sample-copy h3{margin:0 0 10px;font-size:1.55rem;color:#fff}
    .extra-sample-copy p{margin:0;color:#aaa9a4;line-height:1.65}

    .stonecrest-poster-stage{background:radial-gradient(circle at 17% 13%,rgba(255,255,255,.06),transparent 24%),linear-gradient(135deg,#101010 0 58%,#d96033 58% 73%,#c9c4ba 73% 100%)}
    .stonecrest-poster-stage:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.016) 0 1px,transparent 1px 5px);pointer-events:none}
    .poster-sheet{height:min(520px,calc(100% - 10px));width:auto;aspect-ratio:4/5;background:#151515;box-shadow:0 38px 90px rgba(0,0,0,.5);transform:rotate(-1.35deg);transition:.35s ease;position:relative;overflow:hidden;border:1px solid #3b3936;display:grid;grid-template-rows:1.28fr auto auto}
    .stonecrest-poster-stage:hover .poster-sheet{transform:rotate(0deg) translateY(-7px) scale(1.008)}
    .poster-hero{position:relative;padding:25px 26px 22px;overflow:hidden;background:linear-gradient(to bottom,rgba(0,0,0,.04),rgba(0,0,0,.18)),linear-gradient(135deg,#3c3b38 0 38%,#252524 38% 63%,#171717 63%)}
    .poster-hero:before{content:"";position:absolute;left:-7%;right:-9%;bottom:0;height:45%;background:linear-gradient(166deg,transparent 0 26%,#c3bdb1 26% 34%,#77746e 34% 48%,#3f3e3a 48% 62%,#242322 62%);opacity:.9}
    .poster-hero:after{content:"";position:absolute;width:230px;height:230px;border-radius:50%;right:-75px;top:-105px;border:38px solid rgba(217,96,51,.28);box-shadow:0 0 0 28px rgba(217,96,51,.06)}
    .poster-brand-row{position:relative;z-index:3;display:flex;justify-content:space-between;align-items:flex-start;gap:12px}.poster-brand{font-size:.68rem;font-weight:950;letter-spacing:.14em;color:#fff}.poster-badge{padding:7px 9px;border:1px solid rgba(255,255,255,.35);font-size:.44rem;font-weight:850;letter-spacing:.1em;text-transform:uppercase;color:#dedad2;background:rgba(0,0,0,.16)}
    .poster-title{position:relative;z-index:3;margin-top:48px;max-width:290px;font-size:clamp(2rem,3.2vw,3.25rem);line-height:.84;font-weight:950;letter-spacing:-.065em;text-transform:uppercase;color:#fff}.poster-title em{display:block;color:#d8b179;font-style:normal}.poster-rule{position:relative;z-index:3;width:74px;height:5px;background:#d96033;margin-top:17px}
    .poster-proof{position:absolute;z-index:3;right:22px;bottom:18px;display:grid;gap:5px;text-align:right}.poster-proof strong{font-size:.72rem;color:#fff}.poster-proof small{font-size:.42rem;letter-spacing:.08em;text-transform:uppercase;color:#d1cdc4}
    .poster-mid{display:grid;grid-template-columns:1.1fr .9fr;background:#ece8df;color:#1c1b1a;border-top:1px solid #c9c3b8}.poster-mid>div{padding:18px 19px;border-right:1px solid #c8c3b9}.poster-mid>div:last-child{border-right:0}.poster-mid strong{display:block;margin-bottom:8px;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase}.poster-mid p{margin:0;font-size:.51rem;line-height:1.65;color:#5a5752}.poster-service-pills{display:flex;flex-wrap:wrap;gap:5px;margin-top:9px}.poster-service-pills i{font-style:normal;padding:4px 6px;border:1px solid #cbc5ba;border-radius:999px;font-size:.4rem;font-weight:750;text-transform:uppercase;letter-spacing:.05em;color:#393633;background:#f6f2ea}
    .poster-footer{display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center;padding:18px 20px;background:#d96033;position:relative}.poster-footer:before{content:"";position:absolute;left:0;top:0;width:42%;height:5px;background:#1b1b1a}.poster-cta small{display:block;margin-bottom:5px;font-size:.43rem;letter-spacing:.11em;text-transform:uppercase;color:#2c211c}.poster-cta strong{display:block;font-size:.9rem;line-height:1;color:#fff}.poster-contact{margin-top:7px;font-size:.44rem;letter-spacing:.04em;color:#fff}.poster-qr-wrap{display:grid;justify-items:center;gap:4px}.poster-qr{width:54px;height:54px;background:conic-gradient(#111 0 25%,#fff 0 50%,#111 0 75%,#fff 0);background-size:12px 12px;border:6px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.16)}.poster-qr-wrap small{font-size:.35rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#2c211c}

    .nexora-ui-stage{background:radial-gradient(circle at 75% 16%,rgba(183,255,50,.15),transparent 30%),linear-gradient(145deg,#050705,#0a0e09)}
    .ai-window{width:96%;max-width:650px;min-height:440px;border:1px solid #263024;border-radius:20px;background:#080b08;box-shadow:0 38px 90px rgba(0,0,0,.58),0 0 70px rgba(183,255,50,.08);display:grid;grid-template-columns:145px 1fr;overflow:hidden;transform:rotate(.7deg);transition:.35s ease}
    .nexora-ui-stage:hover .ai-window{transform:rotate(0deg) translateY(-9px) scale(1.008)}
    .ai-side{padding:18px 12px;border-right:1px solid #20291f;background:#060806}.ai-logo{font:900 .96rem/1 monospace;color:#b7ff32;margin-bottom:22px}.ai-sub{font:600 .42rem/1 monospace;color:#4f5c4d;letter-spacing:.1em;margin-bottom:16px}.ai-nav{display:grid;gap:8px}.ai-nav i{height:29px;border:1px solid #20291f;border-radius:7px;display:flex;align-items:center;padding:0 9px;font-style:normal;font:600 .53rem/1 monospace;color:#8e998a}.ai-nav i:first-child{border-color:#b7ff32;color:#b7ff32;background:rgba(183,255,50,.06)}
    .ai-main{display:grid;grid-template-rows:auto auto 1fr auto;padding:20px 22px;min-width:0}.ai-top{display:flex;justify-content:space-between;align-items:center}.ai-status{font:700 .52rem/1 monospace;color:#b7ff32;letter-spacing:.1em}.ai-time{font:600 .5rem/1 monospace;color:#526050}.ai-main h4{margin:19px 0 5px;font-size:1.4rem}.ai-main>div>p{margin:0;color:#747d72;font-size:.68rem}.ai-workspace{display:grid;grid-template-columns:1.15fr .85fr;gap:12px;margin-top:18px;min-height:220px}.ai-left{display:grid;grid-template-rows:auto 1fr;gap:10px}.ai-prompt{border:1px solid #263024;border-radius:11px;padding:13px;color:#a7afa3;font-size:.68rem;background:#0c100c}.ai-network-card{position:relative;overflow:hidden;border:1px solid #20291f;border-radius:12px;background:#070a07;min-height:150px}.ai-network-card canvas{position:absolute;inset:0;width:100%;height:100%}.ai-network-label{position:absolute;left:12px;top:10px;z-index:2;font:700 .46rem/1 monospace;color:#7f8a7c;letter-spacing:.08em}.ai-network-live{position:absolute;right:10px;top:9px;z-index:2;font:700 .43rem/1 monospace;color:#b7ff32}.ai-right{display:grid;grid-template-rows:1fr auto;gap:10px}.ai-panel{border:1px solid #20291f;border-radius:12px;padding:12px;background:#0a0d0a}.ai-panel-title{font:700 .48rem/1 monospace;color:#7f8a7c;letter-spacing:.08em;margin-bottom:12px}.ai-feed{display:grid;gap:9px}.ai-feed b{display:grid;grid-template-columns:auto 1fr;gap:7px;align-items:center;font:600 .48rem/1.35 monospace;color:#a7afa3}.ai-feed b:before{content:"";width:5px;height:5px;border-radius:50%;background:#b7ff32;box-shadow:0 0 8px rgba(183,255,50,.5)}.ai-metrics{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ai-metrics div{border:1px solid #20291f;border-radius:9px;padding:9px}.ai-metrics strong{display:block;color:#b7ff32;font:800 .9rem/1 monospace}.ai-metrics small{color:#657062;font:.43rem/1.3 monospace}.ai-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}.ai-actions b{padding:9px 7px;border:1px solid #20291f;border-radius:8px;font:600 .46rem/1.25 monospace;color:#9ba497;text-align:center}

    @media(max-width:850px){.portfolio-extra-showcase{grid-template-columns:1fr}.extra-sample-stage{height:560px}}
    @media(max-width:520px){.extra-sample-stage{height:480px;padding:18px}.poster-sheet{height:min(430px,calc(100% - 4px))}.ai-window{width:100%;grid-template-columns:88px 1fr;min-height:390px}.ai-side{padding:14px 8px}.ai-main{padding:14px 10px}.ai-workspace{grid-template-columns:1fr}.ai-right{display:none}.ai-actions{grid-template-columns:1fr}.ai-nav i{font-size:.44rem;padding:0 5px}}
  `;
  document.head.appendChild(style);

  var section = document.createElement('div');
  section.className = 'portfolio-extra-showcase';
  section.innerHTML = `
    <article class="extra-sample">
      <div class="extra-sample-stage stonecrest-poster-stage">
        <div class="poster-sheet" role="img" aria-label="Stonecrest Concrete promotional poster concept">
          <div class="poster-hero">
            <div class="poster-brand-row"><div class="poster-brand">STONECREST CONCRETE</div><div class="poster-badge">Residential + Commercial</div></div>
            <div class="poster-title">Built right.<em>Built to last.</em></div><div class="poster-rule"></div>
            <div class="poster-proof"><strong>15+ YEARS</strong><small>Built on dependable work</small></div>
          </div>
          <div class="poster-mid">
            <div><strong>Concrete services</strong><p>From new pours to replacement work for homes and businesses.</p><div class="poster-service-pills"><i>Driveways</i><i>Patios</i><i>Walkways</i><i>Foundations</i></div></div>
            <div><strong>Why Stonecrest</strong><p>Clear estimates<br>Reliable scheduling<br>Professional crews</p></div>
          </div>
          <div class="poster-footer"><div class="poster-cta"><small>Ready to build?</small><strong>GET A FREE ESTIMATE</strong><div class="poster-contact">stonecrestconcrete.com · (240) 555-0188</div></div><div class="poster-qr-wrap"><span class="poster-qr" aria-hidden="true"></span><small>Scan to quote</small></div></div>
        </div>
      </div>
      <div class="extra-sample-copy"><span>Graphic design concept</span><h3>Stonecrest Promotional Poster</h3><p>A more polished contractor campaign piece with stronger branding, clearer hierarchy, service callouts, trust signals, and an estimate-focused call to action.</p></div>
    </article>
    <article class="extra-sample">
      <div class="extra-sample-stage nexora-ui-stage">
        <div class="ai-window" role="img" aria-label="Animated Nexora AI product dashboard interface concept">
          <aside class="ai-side"><div class="ai-logo">NEXORA°</div><div class="ai-sub">INTELLIGENCE OS</div><div class="ai-nav"><i>NEW CHAT</i><i>DASHBOARD</i><i>WORKFLOWS</i><i>KNOWLEDGE</i><i>FILES</i><i>ANALYTICS</i></div></aside>
          <div class="ai-main">
            <div class="ai-top"><div class="ai-status">● SYSTEM ONLINE</div><div class="ai-time">LIVE / 24.7</div></div>
            <div><h4>Command center.</h4><p>Ask, automate, monitor, and connect your workflows in one place.</p></div>
            <div class="ai-workspace">
              <div class="ai-left"><div class="ai-prompt">Ask Nexora to build or analyze anything...</div><div class="ai-network-card"><div class="ai-network-label">LIVE INTELLIGENCE MAP</div><div class="ai-network-live">● ACTIVE</div><canvas class="nexora-mini-canvas"></canvas></div></div>
              <div class="ai-right"><div class="ai-panel"><div class="ai-panel-title">AUTOMATION FEED</div><div class="ai-feed"><b>Lead classified and routed</b><b>CRM sync completed</b><b>Campaign data analyzed</b><b>Follow-up sequence ready</b></div></div><div class="ai-metrics"><div><strong>24</strong><small>ACTIVE FLOWS</small></div><div><strong>98.7%</strong><small>UPTIME</small></div></div></div>
            </div>
            <div class="ai-actions"><b>ANALYZE FILES</b><b>BUILD WORKFLOW</b><b>RUN RESEARCH</b></div>
          </div>
        </div>
      </div>
      <div class="extra-sample-copy"><span>UI / product design concept</span><h3>NEXORA° AI Interface</h3><p>A more complete AI workspace concept that brings the live animated network language from the NEXORA° site directly into the product dashboard.</p></div>
    </article>`;

  var nexora = workGrid.querySelector('.nexora-showcase-card');
  if (nexora) nexora.insertAdjacentElement('afterend', section);
  else workGrid.appendChild(section);

  var canvas = section.querySelector('.nexora-mini-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var points = [];
  function resize(){
    var rect = canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    points = Array.from({length:24}, function(_,i){return {x:Math.random()*rect.width,y:Math.random()*rect.height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:i%6===0?2.5:1.2};});
  }
  function draw(){
    var w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<points.length;i++){
      var p=points[i]; p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(183,255,50,.72)'; ctx.fill();
      for(var j=i+1;j<points.length;j++){
        var q=points[j],d=Math.hypot(p.x-q.x,p.y-q.y);
        if(d<92){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle='rgba(183,255,50,'+((1-d/92)*.22)+')';ctx.lineWidth=1;ctx.stroke();}
      }
    }
    requestAnimationFrame(draw);
  }
  resize(); draw(); window.addEventListener('resize',resize);
});