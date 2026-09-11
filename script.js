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
  const de=document.getElementById('d'), he=document.getElementById('h'),
        me=document.getElementById('m'), se=document.getElementById('s');
  if(de) de.textContent=d;
  if(he) he.textContent=String(h).padStart(2,'0');
  if(me) me.textContent=String(m).padStart(2,'0');
  if(se) se.textContent=String(s).padStart(2,'0');
}
tick();
setInterval(tick,1000);

const music = document.getElementById('bgMusic');
const topBtn = document.getElementById('musicBtn');
const sectionBtn = document.getElementById('musicBtn2');
const status = document.getElementById('musicStatus');
const vinyl = document.getElementById('vinyl');

function syncMusicUI(){
  const playing = music && !music.paused;
  if(topBtn) topBtn.textContent = playing ? '❚❚ Pause music' : '▶ Music';
  if(sectionBtn) sectionBtn.textContent = playing ? '❚❚ Pause music' : '▶ Play music';
  if(status) status.textContent = playing ? 'Music is playing' : 'Music is off';
  if(vinyl) vinyl.classList.toggle('playing', playing);
}

async function toggleMusic(){
  if(!music) return;
  try {
    if(music.paused) {
      await music.play();
    } else {
      music.pause();
    }
  } catch(err) {
    if(status) status.textContent = 'Tap play again to start music';
  }
  syncMusicUI();
}

if(topBtn) topBtn.addEventListener('click', toggleMusic);
if(sectionBtn) sectionBtn.addEventListener('click', toggleMusic);
if(music){
  music.addEventListener('play', syncMusicUI);
  music.addEventListener('pause', syncMusicUI);
  music.addEventListener('ended', syncMusicUI);
}
syncMusicUI();
