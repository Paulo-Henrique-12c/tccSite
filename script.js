// Alterna entre modo claro e escuro, salvando a preferência do usuário.
(function () {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  function setTheme(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.setAttribute('aria-pressed', String(isDark));
  }

  // Estado inicial (o <head> já aplicou a classe antes da renderização,
  // aqui só sincronizamos o atributo aria-pressed do botão)
  toggleBtn.setAttribute(
    'aria-pressed',
    String(document.documentElement.classList.contains('dark-mode'))
  );

  toggleBtn.addEventListener('click', function () {
    const isDark = !document.documentElement.classList.contains('dark-mode');
    setTheme(isDark);
  });
})();