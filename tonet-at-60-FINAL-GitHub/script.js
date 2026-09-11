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
