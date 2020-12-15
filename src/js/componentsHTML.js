import { Modal } from 'bootstrap';
const header = require('../partials/header.handlebars');
const category = require('../partials/category.handlebars');
const addModal = require('../partials/add-modal.handlebars');
const authModal = require('../partials/auth-modal.handlebars');
const myCalls = require('../partials/my-calls.handlebars');
const footer = require('../partials/footer.handlebars');

export default [header, category, authModal, addModal, myCalls, footer];
