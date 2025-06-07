// Example product array; replace or extend with the provided data source
const products = [
  { id: 'prod1', name: 'Alpha Widget' },
  { id: 'prod2', name: 'Beta Gadget' },
  { id: 'prod3', name: 'Gamma Tool' }
];

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('productName');
  products.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.name;
    select.appendChild(option);
  });
});
function updateFooterDate() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.querySelectorAll('.last-modified')
    .forEach(el => { el.textContent = `Last Modification: ${formatted}`; });
}

document.addEventListener('DOMContentLoaded', updateFooterDate);