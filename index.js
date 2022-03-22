import { DateTime } from './Modules/luxon.js';
import Book from './Modules/Books.js';
import { renderBooks, addBook } from './Modules/renderBooks.js';
import page from './Modules/pages.js';

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const submitButton = document.getElementById('button');

const dateElement = document.getElementById('date');

const date = DateTime.fromISO('2010-10-22T21:38:00');
dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 10000) + 1;
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
