import { renderBooks } from './renderBooks.js';



const itemList = document.getElementById('li-list');
const itemAdd = document.getElementById('li-add');
const itemContact = document.getElementById('li-contact');

const bookListDiv = document.getElementById('table');
const formDiv = document.getElementById('form');
const contactDiv = document.getElementById('contact');

function constructListPage() {
  bookListDiv.style.display = 'block';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'none';

  renderBooks();
}

function constructFormPage() {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'block';
  contactDiv.style.display = 'none';
}

function constructContactPage() {
  bookListDiv.style.display = 'none';
  formDiv.style.display = 'none';
  contactDiv.style.display = 'block';
}

export default function page(page) {
  switch (page) {
    case 0:
      constructListPage();
      break;
    case 1:
      constructFormPage();
      break;
    case 2:
      constructContactPage();
      break;
    default:
      break;
  }
}

itemList.addEventListener('click', () => {
  page(0);
});

itemAdd.addEventListener('click', () => {
  page(1);
});

itemContact.addEventListener('click', () => {
  page(2);
});
