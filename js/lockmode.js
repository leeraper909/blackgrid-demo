
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('modeToggle');
  button.addEventListener('click', () => {
    document.body.classList.toggle('locked');
  });
});
