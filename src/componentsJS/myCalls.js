const openModalCallsBtn = document.querySelector('[data-action="open-modal-calls"]');
const closeModalCallsBtn = document.querySelector('[data-action="close-modal-calls"]');
const modalBackdrop = document.querySelector('.my-calls-backdrop');

// const gallery = document.querySelector('.js-gallery');

openModalCallsBtn.addEventListener('click', isModalOpen);
closeModalCallsBtn.addEventListener('click', isModalClose);
modalBackdrop.addEventListener('click', clickOnBackdrop);
window.addEventListener('keydown', downOnESC);

function isModalOpen (evt) {
    
    
    evt.preventDefault();
    document.body.classList.add('is-open');
    // window.addEventListener('keydown', onKeyLeafDown);
}

function isModalClose () {
  // if (evt.target.nodeName == 'FORM') {
  //   return;
  // };
  document.body.classList.remove('is-open');
};
  
function clickOnBackdrop (evt) {
  if (evt.currentTarget === evt.target) {
    isModalClose ();    
  }
};
  
function downOnESC(evt) {
    if (evt.code !== 'Escape') {
      return;
    };
    isModalClose ();
};