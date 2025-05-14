const input  = document.querySelector('#favchap');
const button = document.querySelector('button');
const list   = document.querySelector('#list');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return; // ignore empty

  // build a new list‑item
  const li = document.createElement('li');
  li.textContent = text;

  // add a little ❌ button
  const del = document.createElement('button');
  del.textContent = '❌';
  del.classList.add('delete');      // hooks into your .delete CSS
  del.addEventListener('click', () => {
    li.remove();                    // delete on click
  });

  // assemble and insert
  li.append(del);
  list.append(li);

  // clear & refocus
  input.value = '';
  input.focus();
});

// (Optional) let user press Enter in the input
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') button.click();
});
