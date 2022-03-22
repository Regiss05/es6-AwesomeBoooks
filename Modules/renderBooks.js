import { storage } from '../index.js';

const renderBook = (book) => {
  const { id, title, author } = book;

  const renderContainer = document.createElement('tr');
  renderContainer.innerHTML = `
          <td>${id}</td>
          <td>${title}</td>
          <td>${author}</td>
          
          <td>
          <button class="bg-danger text-light border-0 d-block" type="button" onclick="removeBook('${book.id}')">Delete</button></td>
    `;
  return renderContainer;
};

export const renderBooks = () => {
  const container = document.getElementById('ctn-book');
  container.innerHTML = '';
  if (storage !== null) {
    storage.forEach((book) => {
       container.appendChild(renderBook(book));
    });
  }
};