import defaultModal from "./defaultModal";
const application = elem => {
    elem.style.display = 'flex';
    elem.style.transform = 'translateX(0)';
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';

    document.body.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            defaultModal();
        }
    });

    elem.addEventListener('click', e => {
        if (!e.target.closest('.modal-wrapper') || e.target.closest('.modal-close') || e.target.closest('.button-back')) {
            defaultModal();
        }
    });
}

export default application;