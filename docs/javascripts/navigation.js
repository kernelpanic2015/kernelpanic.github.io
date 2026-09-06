function kpInstallProjectDropdown() {
  const pt = document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith('pt');
  const label = pt ? 'Projetos' : 'Projects';
  const links = Array.from(document.querySelectorAll('.md-tabs__link'));
  const tabLink = links.find(a => a.textContent.trim() === label);
  if (!tabLink) return;
  const item = tabLink.closest('.md-tabs__item');
  if (!item || item.querySelector('.kp-project-dropdown')) return;
  const prefix = pt ? '/pt-BR' : '';
  const names = pt
    ? [['OMNI·ONE','omni-one'],['OpenEdge32','openedge32'],['ASCP','ascp'],['A Fábula dos Porcos Assados','fable']]
    : [['OMNI·ONE','omni-one'],['OpenEdge32','openedge32'],['ASCP','ascp'],['Fable of the Roasted Pigs','fable']];
  const menu = document.createElement('div');
  menu.className = 'kp-project-dropdown';
  menu.innerHTML = names.map(([name,slug]) => `<a href="${prefix}/projects/${slug}/">${name}</a>`).join('');
  item.appendChild(menu);
}
if (typeof document$ !== 'undefined') document$.subscribe(kpInstallProjectDropdown);
else document.addEventListener('DOMContentLoaded', kpInstallProjectDropdown);
