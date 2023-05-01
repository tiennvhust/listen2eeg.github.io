// Set the number of pages and items per page
const itemsPerPage = 1;

// Show the first page and hide the rest
const items = document.querySelectorAll('.item');
for (let i = itemsPerPage; i < items.length; i++) {
  items[i].style.display = 'none';
}

// Add click event listener to each button
const buttons = document.querySelectorAll('.pagination button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    // Determine which page was clicked
    const pageNum = parseInt(buttons[i].innerText);

    // Calculate the start and end index of the items to show
    const start = (pageNum - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Show the items for the selected page and hide the rest
    for (let j = 0; j < items.length; j++) {
      if (j >= start && j < end) {
        items[j].style.display = '';
      } else {
        items[j].style.display = 'none';
      }
    }

    // Set the active button style
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }
    buttons[i].classList.add('active');
  });
}

// Set the first button as active
buttons[0].classList.add('active');

// Load content of other HTML files into items
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const url = item.getAttribute('data-url');

  fetch(url)
    .then(response => response.text())
    .then(html => {
      item.innerHTML = html;
    })
    .catch(error => console.error(error));
}
