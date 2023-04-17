const defaultModal = () => {
    modal.forEach(e => {
        e.style.display = 'none';
        e.style.transform = 'translateX(-100%)';
        e.style.visibility = 'hidden';
        e.style.opacity = '0';
    });
}
export default defaultModal;