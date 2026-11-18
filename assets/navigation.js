const nav = document.querySelector('#site-nav');
const visible = nav.querySelector('.visible-links');
const more = nav.querySelector('#more-links');
const toggle = nav.querySelector('button');
const items = [...visible.children];

function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.classList.toggle('close', open);
  more.classList.toggle('hidden', !open);
}

function fitLinks() {
  let shown = items.length;
  visible.replaceChildren(...items);
  const left = visible.getBoundingClientRect().left;
  const usedWidth = () => visible.lastElementChild.getBoundingClientRect().right - left;
  if (usedWidth() > nav.clientWidth) {
    toggle.classList.remove('hidden');
    const width = nav.clientWidth - toggle.offsetWidth;
    while (shown > 1 && usedWidth() > width) {
      visible.lastElementChild.remove();
      --shown;
    }
  }
  more.replaceChildren(...items.slice(shown));
  toggle.classList.toggle('hidden', shown === items.length);
  setOpen(false);
}

toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
more.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setOpen(false);
    toggle.focus({ preventScroll: true });
  }
});
nav.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
document.addEventListener('pointerdown', (event) => {
  if (!nav.contains(event.target)) setOpen(false);
});

if ('ResizeObserver' in window) {
  nav.classList.add('nav-ready');
  new ResizeObserver(fitLinks).observe(nav);
  fitLinks();
}
