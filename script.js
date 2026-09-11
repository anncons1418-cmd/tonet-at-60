const target = new Date('2026-11-01T17:30:00+08:00').getTime();

function tick(){
  let x = target - Date.now();
  if(x <= 0){
    const c = document.querySelector('.countdown');
    if(c) c.innerHTML = '<div style="width:auto"><b>It’s celebration time!</b></div>';
    return;
  }
  const d=Math.floor(x/86400000); x%=86400000;
  const h=Math.floor(x/3600000); x%=3600000;
  const m=Math.floor(x/60000); x%=60000;
  const s=Math.floor(x/1000);
  document.getElementById('d').textContent=d;
  document.getElementById('h').textContent=String(h).padStart(2,'0');
  document.getElementById('m').textContent=String(m).padStart(2,'0');
  document.getElementById('s').textContent=String(s).padStart(2,'0');
}
tick();
setInterval(tick,1000);

let playing = false;
const yt = document.getElementById('ytPlayer');
const topBtn = document.getElementById('musicBtn');
const sectionBtn = document.getElementById('musicBtn2');
const status = document.getElementById('musicStatus');
const vinyl = document.getElementById('vinyl');

function setLabels(){
  if(topBtn) topBtn.textContent = playing ? '❚❚ Pause music' : '▶ Music';
  if(sectionBtn) sectionBtn.textContent = playing ? '❚❚ Pause music' : '▶ Play music';
  if(status) status.textContent = playing ? 'Music is playing' : 'Music is off';
  if(vinyl) vinyl.classList.toggle('playing', playing);
}

function toggleMusic(){
  if(!playing){
    yt.src='https://www.youtube.com/embed/KQetemT1sWc?autoplay=1&loop=1&playlist=KQetemT1sWc&controls=0&modestbranding=1&playsinline=1';
    playing=true;
  }else{
    yt.src='';
    playing=false;
  }
  setLabels();
}

if(topBtn) topBtn.addEventListener('click', toggleMusic);
if(sectionBtn) sectionBtn.addEventListener('click', toggleMusic);
setLabels();
