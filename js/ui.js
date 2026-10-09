// Progressive enhancement: links remain available without JavaScript.
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-principal');
const desktop = matchMedia('(min-width: 900px)');
function closeDropdowns() { menu.querySelectorAll('details').forEach(item => item.open = false); }
function setMenu(open) { toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open); if (!open) closeDropdowns(); }
toggle.hidden = false;
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
desktop.addEventListener('change', () => setMenu(false));
menu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('click', event => { if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { const summary = menu.querySelector('details[open] summary'); const wasOpen = toggle.getAttribute('aria-expanded') === 'true'; setMenu(false); if (wasOpen && !desktop.matches) toggle.focus(); else if (summary) summary.focus(); } });
for (const button of document.querySelectorAll('[data-dialog]')) {
 const dialog = document.getElementById(button.dataset.dialog);
 if (typeof dialog.showModal !== 'function') continue;
 button.hidden = false;
 button.addEventListener('click', () => dialog.showModal());
 dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
 dialog.addEventListener('close', () => button.focus());
}
for (const button of document.querySelectorAll('.alert-close')) button.addEventListener('click', () => { const alert = button.closest('.alert'); alert.hidden = true; const submit = document.querySelector('button[type="submit"]'); if (submit) submit.focus(); });
document.documentElement.classList.add('js');
