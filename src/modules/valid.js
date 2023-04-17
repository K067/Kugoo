import validPlus from "./validPlus";

const valid = () => {
    const emails = document.querySelectorAll('input[name=user_email]');
    const dial = document.querySelectorAll('input[name=user_phone]');

    emails.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^a-z\d@-_.!~*']/gi, '');

            if (e.target.classList.contains('error') && validPlus([e.target])) {
                e.target.classList.remove('error');
            }
        });

    });
    dial.forEach((value) => {
        value.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^\d()\-\+ ]+/, '');

            if (e.target.classList.contains('error') && validPlus([e.target])) {
                e.target.classList.remove('error');
            }
        });
    });
};

export default valid;