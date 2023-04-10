const validate = list => {
    let success = true;

    list.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'user_name':
                if (/^[а-яё]{2,}/gi.test(elem.value.trim())) {
                    return;
                }
                break;
            case 'user_phone':
                if (elem.value.length === 18) {
                    return;
                }
                break;
            case 'user_email':
                if (/^[a-z\d-\_\.!~*']+@[a-z\d-\_\.!~*']+.[a-z]{2,3}$/gi.test(elem.value.trim())) {
                    return;
                }
                break;
            default: return;
        }

        success = false;
        elem.classList.add('error');
    });

    return success;
};

export default validate;