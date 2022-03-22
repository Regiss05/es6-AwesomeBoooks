import { loadLocalStorage } from './localStorage.js';
import Book from './Books.js';

export function addBook(book) {
  Book.addBook(book);
}

function removeBook(bookId) {
  Book.removeBook(bookId);
}

const renderBook = (book) => {
  const { title, author } = book;

  const renderContainer = document.createElement('tr');
  const tdTitle = document.createElement('td');
  const tdAuthor = document.createElement('td');
  const tdButton = document.createElement('td');
  tdButton.id = 'tdButton';
  const button = document.createElement('button');
  button.className = 'bg-danger text-light border-0 d-block';
  button.textContent = 'Delete';

  tdTitle.innerHTML = title;
  tdAuthor.innerHTML = author;

  tdButton.appendChild(button);
  renderContainer.appendChild(tdTitle);
  renderContainer.appendChild(tdAuthor);
  renderContainer.appendChild(tdButton);
  return renderContainer;
};

export const renderBooks = () => {
  const container = document.getElementById('ctn-book');
  container.innerHTML = '';
  const storage = loadLocalStorage();
  if (storage !== null) {
    storage.forEach((book) => {
      const child = renderBook(book);
      const button = child.children[2].firstChild;
      button.addEventListener('click', () => {
        removeBook(book.id);
        renderBooks();
      });
      container.appendChild(child);
    });
  }
};
