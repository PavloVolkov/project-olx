// Логика закрытия модалки по кнопке закрыть, искейпу и бэкдропу
const refs = {
  openAddModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeAddModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  selectorCategory: document.querySelector('.add-modal__product-select'),
  imgLoaderArea: document.querySelector('.add-modal__product-photos'),
};

refs.openAddModalBtn.addEventListener('click', onOpenAddModal);
refs.closeAddModalBtn.addEventListener('click', onCloseAddModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenAddModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseAddModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseAddModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseAddModal();
  }
}

// Логика добавления изображения и перемещения "+" на следующий блок
let imgLoaderArea;

// imgLoaderArea = document.querySelector('.add-modal__product-photos');

refs.imgLoaderArea.addEventListener('click', chooseImgBlock);
refs.imgLoaderArea.addEventListener('change', previewImg);

//==================================
function chooseImgBlock(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  if (!event.target.dataset.active) {
    return;
  }
  const imgTarget = event.target;
  imgTarget.setAttribute('type', 'file');
}

//=========================
function previewImg(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  changeImgBlock(event);
  if (event.target.dataset.id) {
    const file = event.target.files[0];
    const inputID = event.target.dataset.id;
    const img = document.querySelector(`.input-label__img--${inputID}`);
    const reader = new FileReader();
    reader.onloadend = () => {
      img.src = reader.result;
      productImage = reader.result;
      img.setAttribute('data-img', productImage);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.src = '';
    }
  }
}

//======================
function changeImgBlock(event) {
  const imgTarget = event.target;
  imgTarget.nextElementSibling.classList.remove('choose-this');
  let imgId = Number(event.target.dataset.id);
  imgId += 1;
  if (imgId > 6) {
    return;
  }
  const nextImg = document.querySelector(`[data-id="${imgId}"]`);
  nextImg.dataset.active = true;
  nextImg.nextElementSibling.classList.add('choose-this');
}

//===========================
fetch('https://callboard-backend.herokuapp.com/call/categories')
  .then(response => response.json())
  .then(result => {
    let translationOfWords = {
      property: 'Нерухомість',
      transport: ' Транспорт',
      work: 'Робота',
      electronics: 'Електроніка',
      'business and services': 'Бізнес та послуги',
      'recreation and sport': 'Відпочинок та спорт',
      free: 'Віддам безкоштовно',
      trade: 'Обмін',
    };
    const markup = result.map(
      category =>
        `<option value="${category}" class="select-option">${translationOfWords[category]}</option> `,
    );
    refs.selectorCategory.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log('error', error));
