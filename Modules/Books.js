import { loadLocalStorage, updateLocalStorage } from './localStorage.js';

const radix = 10;
export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    const arr = loadLocalStorage();
    arr.push(book);
    updateLocalStorage(arr);
  }

  static removeBook(bookId) {
    const arr = loadLocalStorage();
    const data = arr.filter((item) => item.id !== parseInt(bookId, radix));
    updateLocalStorage(data);
  }
}