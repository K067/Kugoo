import validPlus from "./validPlus";

const formSending = ({ id, someElement = [] }) => {
    const form = document.getElementById(id);
    const statusBlock = document.createElement('div');
    const errorText = 'Ошибка';
    const invalidText = 'Форма заполнена неверно';


    const sendData = data => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };
    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
        console.log(formData);

        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (val !== '') {
                formBody[key] = val;
            }
        });

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (element.textContent === '0') {
                return false;
            } else {
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === 'input') {
                    formBody[elem.id] = element.value;

                }
            }

        });

        if (validPlus(formElements)) {
            sendData(formBody).then(data => {

                setTimeout(() => { statusBlock.textContent = ''; }, 5000);

                formElements.forEach(input => {
                    input.value = '';
                });
            })
                .catch(error => {
                    statusBlock.style.color = 'red';
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.style.color = 'red';
            statusBlock.textContent = invalidText;

            setTimeout(() => { statusBlock.textContent = ''; }, 5000);
        }
    };

    try {
        if (!form) {
            throw new Error('?');
        }
        form.addEventListener('submit', event => {
            event.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }
};

export default formSending;
