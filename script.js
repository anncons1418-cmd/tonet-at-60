
const target = new Date('2026-11-01T17:30:00+08:00').getTime();
function tick(){
  let x = target - Date.now();
  if(x <= 0){document.querySelector('.countdown').innerHTML='<div style="width:auto"><b>It’s celebration time!</b></div>';return;}
  const d=Math.floor(x/86400000); x%=86400000;
  const h=Math.floor(x/3600000); x%=3600000;
  const m=Math.floor(x/60000); x%=60000;
  const s=Math.floor(x/1000);
  document.getElementById('d').textContent=d;
  document.getElementById('h').textContent=String(h).padStart(2,'0');
  document.getElementById('m').textContent=String(m).padStart(2,'0');
  document.getElementById('s').textContent=String(s).padStart(2,'0');
}
tick(); setInterval(tick,1000);

let playing=false;
function toggleMusic(){
  const frame=document.getElementById('ytPlayer');
  const b1=document.getElementById('musicBtn');
  const b2=document.getElementById('musicBtn2');
  if(!playing){
    frame.src='https://www.youtube.com/embed/KQetemT1sWc?autoplay=1&loop=1&playlist=KQetemT1sWc&controls=0';
    b1.textContent='❚❚ Music'; b2.textContent='❚❚ Pause background music'; playing=true;
  }else{
    frame.src=''; b1.textContent='▶ Music'; b2.textContent='▶ Play background music'; playing=false;
  }
}
document.getElementById('musicBtn').addEventListener('click',toggleMusic);
document.getElementById('musicBtn2').addEventListener('click',toggleMusic);
