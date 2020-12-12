const refs = {
  openModalBtn: document.querySelector('.header__create-add-btn'),
  closeModalBtn: document.querySelector('.add-modal__close-btn'),
  modal: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}

let imgLoaderArea;

imgLoaderArea = document.querySelector('.add-modal__product-photos');

imgLoaderArea.addEventListener('click', chooseImgBlock);
imgLoaderArea.addEventListener('change', previewImg);

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
