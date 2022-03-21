import { storage } from '../index.js';

export function loadLocalStorage() {
  if (localStorage.getItem('book') === null) {
    localStorage.setItem('book', JSON.stringify([]));
    const data = localStorage.getItem('book');
    const bookStorage = JSON.parse(data);
    return bookStorage;
  }
  const data = localStorage.getItem('book');
  const bookStorage = JSON.parse(data);
  return bookStorage;
}

export function updateLocalStorage() {
  localStorage.setItem('book', JSON.stringify(storage));
}