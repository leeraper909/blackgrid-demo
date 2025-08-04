
document.addEventListener('DOMContentLoaded', () => {
  let level = 3;
  const el = document.getElementById('defconLevel');
  setInterval(() => {
    level = (level === 1) ? 5 : level - 1;
    el.textContent = level;
  }, 3000);
});
