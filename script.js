const projectGrid = document.getElementById('projectGrid');
const overlay = document.getElementById('overlay');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function openProject(card){
    const data = JSON.parse(card.getAttribute('data-project'));
    modalContent.innerHTML = `
    <h2>${escapeHtml(data.title)}</h2>
    <p style="color:var(--muted)">${escapeHtml(data.desc)}</p>
    <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">${(data.tags||[]).map(t=>`<div class='chip'>${escapeHtml(t)}</div>`).join('')}</div>
    <div style="margin-top:12px;color:var(--muted)"></div>
    `;
    overlay.classList.add('show');
    closeModal.focus();
}

projectGrid.addEventListener('click', e=>{
    const card = e.target.closest('.project-card');
    if(card) openProject(card);
});
projectGrid.addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
        const card = e.target.closest('.project-card');
        if(card) openProject(card);
    }
});

closeModal.addEventListener('click', () => overlay.classList.remove('show'));
overlay.addEventListener('click', e=> {
    if(e.target === overlay) overlay.classList.remove('show');
});

const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle.addEventListener('click', () => {
    dark = !dark;
    if(dark){
        document.documentElement.style.setProperty('--bg', "#0f1724");
    } else{
        document.documentElement.style.setProperty('--bg', "#f8fafc");
    }
});

function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m];});
}

document.getElementById('seeWork').addEventListener('click', () => {
document.getElementById('projectsHeading').scrollIntoView({behavior: 'smooth'});
});

(function heroParallax(){
    const hero = document.querySelector('.hero');
    if(!hero) return;
    hero.addEventListener('mousemove', e=> {
        const rX = (e.clientX - window.innerWidth / 2) / 80;
        const rY = (e.clientY - window.innerHeight / 2) / 80;
        hero.style.transform = `translate(${rX}px, ${rY}px)`;
    });
    hero.addEventListener('mouseleave', ()=>hero.style.transform='translate(0,0)');
})