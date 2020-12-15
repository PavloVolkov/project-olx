import categoryTpl from '../templates/category.handlebars';
import ApiService from './api-service';

const search = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const categoryRend = document.querySelector('.category-rend');

const apiService = new ApiService();

search.addEventListener('submit', searchFn);
loadMoreBtn.addEventListener('click', loadMore);

const category = {
  property: document.querySelector('.btn-category-property'),
  transport: document.querySelector('.btn-category-transport'),
  work: document.querySelector('.btn-category-work'),
  electronics: document.querySelector('.btn-category-electronics'),
  business: document.querySelector('.btn-category-business'),
  recreation: document.querySelector('.btn-category-recreation'),
  free: document.querySelector('.btn-category-free'),
  trade: document.querySelector('.btn-category-trade'),
};

category.property.addEventListener('click', propertyFn);
category.transport.addEventListener('click', transportFn);
category.work.addEventListener('click', workFn);
category.electronics.addEventListener('click', electronicsFn);
category.business.addEventListener('click', businessFn);
category.recreation.addEventListener('click', recreationFn);
category.free.addEventListener('click', freeFn);
category.trade.addEventListener('click', tradeFn);

const rendCategory = {
  property: document.querySelector('.property'),
  transport: document.querySelector('.transport'),
  work: document.querySelector('.work'),
  electronics: document.querySelector('.electronics'),
  business: document.querySelector('.business'),
  recreation: document.querySelector('.recreation'),
  free: document.querySelector('.free'),
  trade: document.querySelector('.trade'),
};
propertyFn();
transportFn();
workFn();
electronicsFn();
businessFn();
recreationFn();
recreationFn();
freeFn();
tradeFn();

function propertyFn() {
  clearContainer();
  apiService.fetchProperty().then(rendProperty);
}
function rendProperty(data) {
  rendCategory.property.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function transportFn() {
  clearContainer();
  apiService.fetchTransport().then(rendTransport);
}

function rendTransport(data) {
  rendCategory.transport.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function workFn() {
  clearContainer();
  apiService.fetchWork().then(rendWork);
}
function rendWork(data) {
  rendCategory.work.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function electronicsFn() {
  clearContainer();
  apiService.fetchElectronics().then(rendElectronics);
}
function rendElectronics(data) {
  rendCategory.electronics.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function businessFn() {
  clearContainer();
  apiService.fetchBusiness().then(rendBusiness);
}
function rendBusiness(data) {
  rendCategory.business.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function recreationFn() {
  clearContainer();
  apiService.fetchRecreation().then(rendRecreation);
}
function rendRecreation(data) {
  rendCategory.recreation.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function freeFn() {
  clearContainer();
  apiService.fetchFree().then(rendFree);
}
function rendFree(data) {
  rendCategory.free.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function tradeFn() {
  clearContainer();
  apiService.fetchTrade().then(rendTrade);
}
function rendTrade(data) {
  rendCategory.trade.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function loadMore() {
  console.log('загрузи больше');
}

function searchFn(e) {
  e.preventDefault();
  clearContainer();
  apiService.query = e.currentTarget.elements.query.value;
  apiService.fetchSearchQuery().then(appendCategory);
  console.log('Сабмит на поиске');
}

function appendCategory(data) {
  categoryRend.insertAdjacentHTML('beforeend', categoryTpl(data));
}

function clearContainer() {
  categoryRend.innerHTML = '';
}
// Вопросы к ментору
// 1 Как искать по названию
// 2 Как вызвать категории "бизнес и услуги" и  "отдых и спорт"
// Как отфильтровать товары по свойству isOnSale
// Как освежить ветку если у меня

// Задачи на 14 декабря
// 1. Сделать поиск +
// 2. Сделать секции на одной странице +
// 3. Сделать категорию на одной странице
// 4. Запушить все правильно и проверить
