const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
    const elems = document.querySelectorAll(selector);

    const mask = event => {
        const { keyCode, target } = event;
        const template = masked;
        const def = template.replace(/\D/g, '');
        const val = target.value.replace(/\D/g, '');

        let i = 0;
        let newValue = template.replace(/[_\d]/g, (a) =>
            i < val.length ? val.charAt(i++) || def.charAt(i) : a);

        i = newValue.indexOf('_');

        if (i !== -1)
            newValue = newValue.slice(0, i);

        let reg = template.substr(0, target.value.length)
            .replace(/_+/g, ({ length }) => `\\d{1,${length}}`)
            .replace(/[+()]/g, '\\$&');

        reg = new RegExp(`^${reg}$`);

        if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58) {
            target.value = newValue;
        }

        if (event.type == 'blur' && target.value.length < 5) {
            target.value = '';
        }
    };

    for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }
};

export default maskPhone;