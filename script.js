const items = document.querySelectorAll('.item');
const itemsPerPage = 1;
let currentPage = 1;

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
      item.querySelector('iframe').src = item.getAttribute('href');
    } else {
      item.style.display = 'none';
    }
  });
}

function createPagination() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      showPage(currentPage);
      updatePagination();
    });
    pagination.appendChild(pageLink);
  }
  document.querySelector('.navigation').appendChild(pagination);
}

function updatePagination() {
  const paginationLinks = document.querySelectorAll('.pagination a');
  paginationLinks.forEach((link, index) => {
    if (index + 1 === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

showPage(currentPage);
createPagination();
