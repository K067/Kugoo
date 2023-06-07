import defaultModal from './defaultModal';

const modal = () => {
  const modalNative = document.querySelector('.modal-native');
  const buttons = document.querySelectorAll('.popup');

  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      modalNative.style.display = 'flex';
      modalNative.style.transform = 'translateX(0)';
      modalNative.style.visibility = 'visible';
      modalNative.style.opacity = '1';
    });
  });

  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      defaultModal();
    }
  });

  modalNative.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-wrapper') || e.target.closest('.modal-close') || e.target.closest('.button-back')) {
      defaultModal();
    }
  });
};

export default modal;
