document.addEventListener('DOMContentLoaded', () => {
  // Get current count (or start at 0)
  let count = parseInt(localStorage.getItem('reviewCount') || '0', 10);
  count++;
  localStorage.setItem('reviewCount', count);
  document.getElementById('reviewCount').textContent = count;
});
