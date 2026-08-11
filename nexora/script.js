document.addEventListener('DOMContentLoaded',()=>{
  const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
  $('#year').textContent=new Date().getFullYear();

  function tick(){const d=new Date();$('#clock').textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':')} tick();setInterval(tick,1000);

  const dot=$('.cursor-dot'), label=$('.cursor-label');
  window.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';label.style.left=e.clientX+'px';label.style.top=e.clientY+'px'});
  $$('a,button,.feature-rows article').forEach(el=>{el.addEventListener('mouseenter',()=>label.textContent=el.matches('.feature-rows article')?'OPEN':'VIEW');el.addEventListener('mouseleave',()=>label.textContent='')});
  $('#networkCanvas').addEventListener('mouseenter',()=>label.textContent='EXPLORE');$('#networkCanvas').addEventListener('mouseleave',()=>label.textContent='');

  const canvas=$('#networkCanvas'),ctx=canvas.getContext('2d'); let points=[],mouse={x:-999,y:-999};
  function resize(){canvas.width=canvas.offsetWidth*devicePixelRatio;canvas.height=canvas.offsetHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);const w=canvas.offsetWidth,h=canvas.offsetHeight;points=Array.from({length:34},(_,i)=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:i%7===0?3:1.5}))}resize();window.addEventListener('resize',resize);
  canvas.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect();mouse={x:e.clientX-r.left,y:e.clientY-r.top}});
  function draw(){const w=canvas.offsetWidth,h=canvas.offsetHeight;ctx.clearRect(0,0,w,h);points.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const md=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(md<140){p.x+=(p.x-mouse.x)*.002;p.y+=(p.y-mouse.y)*.002}ctx.beginPath();ctx.arc(p.x,p.y,p.r+(md<140?1.5:0),0,Math.PI*2);ctx.fillStyle=md<140?'#b7ff32':'rgba(183,255,50,.58)';ctx.fill()});for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){const a=points[i],b=points[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<165){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(183,255,50,${(1-d/165)*.18})`;ctx.lineWidth=1;ctx.stroke()}}requestAnimationFrame(draw)}draw();

  const counters=$$('[data-counter]');const seen=new WeakSet();const countObs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting&&!seen.has(entry.target)){seen.add(entry.target);const el=entry.target,target=+el.dataset.counter,start=performance.now(),dur=1500;function step(t){const p=Math.min((t-start)/dur,1),v=Math.floor(target*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString();if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}}),{threshold:.35});counters.forEach(c=>countObs.observe(c));

  const flowSteps=$$('.flow-step'), flowProgress=$('#flowProgress');function updateFlow(){const sec=$('.workflow-section'),r=sec.getBoundingClientRect(),vh=innerHeight;const p=Math.max(0,Math.min(1,(vh-r.top)/(r.height*.83)));flowProgress.style.height=(p*100)+'%';flowSteps.forEach((s,i)=>s.classList.toggle('active',p>(i/(flowSteps.length-.2))))}addEventListener('scroll',updateFlow,{passive:true});updateFlow();

  const dockLinks=$$('.dock a');
  const dockSections=[$('.hero'),$('#system'),$('#engine'),$('#network'),$('#company')];
  function setDockActive(index){dockLinks.forEach((a,i)=>a.classList.toggle('active',i===index))}
  function updateDock(){
    if(window.scrollY<Math.max(120,innerHeight*.35)){setDockActive(0);return}
    const marker=innerHeight*.42;
    let active=0;
    dockSections.forEach((section,i)=>{if(!section)return;const r=section.getBoundingClientRect();if(r.top<=marker&&r.bottom>marker)active=i});
    setDockActive(active);
  }
  addEventListener('scroll',updateDock,{passive:true});
  addEventListener('resize',updateDock);
  updateDock();

  const run=$('#runTerminal'),out=$('#terminalOutput');let running=false;run.addEventListener('click',()=>{if(running)return;running=true;out.innerHTML='<p><i>›</i> nexora.initialize()</p>';const lines=[['Connecting systems...','muted'],['CRM connected ✓','ok'],['Email connected ✓','ok'],['Analytics connected ✓','ok'],['AI decision layer ready ✓','ok'],['Workflow ready ✓','ok'],['› RUN AUTOMATION',''],['Lead classified → routed → follow-up sent','ok'],['COMPLETE / 0.82 sec','ok']];lines.forEach((item,i)=>setTimeout(()=>{const p=document.createElement('p');p.className=item[1];p.textContent=item[0];out.appendChild(p);out.scrollTop=out.scrollHeight;if(i===lines.length-1)running=false},500*(i+1))) });

  const panel=$('#aiPanel'),toggle=$('#aiToggle'),close=$('#aiClose'),messages=$('#aiMessages');function setPanel(open){panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open))}toggle.addEventListener('click',()=>setPanel(!panel.classList.contains('open')));close.addEventListener('click',()=>setPanel(false));
  const replies={lead:['Analyzing current lead workflow…','CRM detected ✓','Email connected ✓','Lead routing configured ✓','Estimated time saved: 6.4 hrs/week'],crm:['Scanning available integrations…','Salesforce compatible ✓','HubSpot compatible ✓','Custom API connection available ✓','Ready to map fields.'],status:['3 workflows active','184,291 tasks processed today','0 failed critical actions','Average response: 0.8 sec']};
  $$('.ai-prompts button').forEach(btn=>btn.addEventListener('click',()=>{const key=btn.dataset.prompt;const u=document.createElement('div');u.className='user-msg';u.textContent=btn.textContent;messages.appendChild(u);messages.scrollTop=messages.scrollHeight;const thinking=document.createElement('div');thinking.className='bot-msg';thinking.textContent='Processing…';messages.appendChild(thinking);setTimeout(()=>{thinking.remove();const box=document.createElement('div');box.className='bot-msg';box.innerHTML=replies[key].join('<br>');messages.appendChild(box);messages.scrollTop=messages.scrollHeight},700)}));

  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'})}),{threshold:.12});$$('.engine-head,.feature-rows article,.terminal,.terminal-copy').forEach(el=>reveal.observe(el));
});