import { DateTime } from './Modules/luxon.js';
import { loadLocalStorage } from './Modules/localstorage.js';
import Book from './Modules/Books.js';
import { renderBooks } from './Modules/renderBooks.js';
import page from './Modules/pages.js';

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('button');

const dateElement = document.getElementById('date');

const date = DateTime.fromISO('2010-10-22T21:38:00');
dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);

export const storage = loadLocalStorage();

function addBook(book) {
  Book.addBook(book);
}

function removeBook(bookId) {
  Book.removeBook(bookId);
}
removeBook();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const id = storage.length + 1;
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(id, title, author);
  titleInput.value = '';
  authorInput.value = '';
  addBook(book);
  renderBooks();
});

page(0);
renderBooks();
