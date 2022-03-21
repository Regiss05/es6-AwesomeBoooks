import { storage } from '../index.js';
import { updateLocalStorage } from './localstorage.js';
import { renderBooks } from './renderBooks.js';

const radix = 10;

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    storage.push(book);
    updateLocalStorage();
    renderBooks();
  }

  static removeBook(bookId) {
    
  }
}