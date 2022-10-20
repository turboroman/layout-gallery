const btns = document.querySelectorAll('.gallery__modal-btn');
const modalOverlay = document.querySelector('.modals__overlay');
const modals = document.querySelectorAll('.modals__modal');
const modalClose = document.querySelector('.modals__close-btn');

function onCloseClick () {
  modalOverlay.classList.remove('modals__overlay--visible');
  document.body.removeAttribute('style');
}

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-modal-path');

		modals.forEach((el) => {
			el.classList.remove('modals__modal--visible');
		});

		document.querySelector(`[data-modal-target="${path}"]`).classList.add('modals__modal--visible');
		modalOverlay.classList.add('modals__overlay--visible');

    document.body.style.overflow = 'hidden';
	});

  modalClose.addEventListener('click', onCloseClick);
  // modalOverlay.addEventListener('click', onCloseClick);
  // modals.removeAttribute('click', onCloseClick);
});

// ------------------------------------------------------
