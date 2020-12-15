export default openAndCloseMenu()

function openAndCloseMenu() {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', onClickOpenModal);
  refs.closeModalBtn.addEventListener('click', onClickCloseModal);

  function onClickOpenModal() {
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
    refs.modal.classList.add("is-open");
  }

  function onClickCloseModal() {
    window.removeEventListener("keydown", onKeyDown);
    refs.modal.removeEventListener("click", onOverlayClick);
    refs.modal.classList.remove("is-open");
  }

  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      onClickCloseModal()
    }
  }
  
  function onKeyDown(event) {
    if (event.code === "Escape") {
      onClickCloseModal()
    }
}
}