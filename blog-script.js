document.querySelectorAll('.sidebar-toc a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
const sections = document.querySelectorAll('h2[id]');
const tocLinks = document.querySelectorAll('.sidebar-toc a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  tocLinks.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.style.color = active ? '#C9A84C' : '';
    a.style.borderLeftColor = active ? '#C9A84C' : '';
  });
});
