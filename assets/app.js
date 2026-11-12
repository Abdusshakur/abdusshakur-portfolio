(function(){
const root=document.documentElement;
const stored=localStorage.getItem('aa-theme'); if(stored==='dark')root.setAttribute('data-theme','dark');
const toggle=document.querySelector('.theme-toggle');
function update(){if(toggle){const dark=root.getAttribute('data-theme')==='dark';toggle.textContent=dark?'☀':'◐';toggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');}}
update(); if(toggle)toggle.addEventListener('click',()=>{const dark=root.getAttribute('data-theme')==='dark';if(dark){root.removeAttribute('data-theme');localStorage.setItem('aa-theme','light')}else{root.setAttribute('data-theme','dark');localStorage.setItem('aa-theme','dark')}update()});
const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
})();