document.querySelectorAll('.month-group').forEach(group => {
    const summary = group.querySelector('summary');
    const btn = summary.querySelector('.toggle-btn');
    summary.addEventListener('click', () => {
      const expanded = !group.hasAttribute('open');
      group.toggleAttribute('open');
      btn.textContent = expanded ? 'Hide' : 'Show';
      btn.setAttribute('aria-expanded', expanded);
    });
  });
  