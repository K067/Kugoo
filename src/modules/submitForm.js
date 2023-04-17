import validPlus from "./validPlus";
import application from "./application";
import defaultModal from "./defaultModal";
import formSending from "./formSending";

const submitForm = () => {
    const statusBlock = document.createElement('div');
    const invalidText = 'Форма заполнена неверно';
    const form = document.querySelectorAll('form');

    statusBlock.classList.add('just-validate-error-label')

    form.forEach(data => {
        const validation = new JustValidate(data, {
            errorFieldCssClass: 'is-invalid',
        });
        validation
            .addField('input[name=user_phone]', [
                {
                    rule: 'required',
                    errorMessage: 'Укажите телефон',
                },
            ])
            // .addField('input[name=user_email]', [
            //     {
            //     },
            // ])
            .addField('input[name=user_check]', [
                {
                    rule: 'required',
                    errorMessage: 'Согласись!'
                },
            ])
            .onSuccess((event) => {
                event.preventDefault();
                const formElements = event.target;
                const formData = new FormData(formElements);

                if (validPlus(formElements.querySelectorAll('input'))) {
                    formSending(formData, formElements.getAttribute('action')).then(() => {

                        defaultModal();
                        application(document.querySelector('.application'));

                        formElements.querySelectorAll('input').forEach(input => {
                            input.value = '';
                        });

                    }).catch(() => {
                        alert('ошибка');
                    });
                } else {
                    const formPolicy = document.querySelector('.form-policy');
                    formPolicy.append(statusBlock)
                    statusBlock.style.color = 'red';
                    statusBlock.textContent = invalidText;

                    setTimeout(() => { statusBlock.textContent = ''; }, 5000);
                }
            });
    });
}

export default submitForm;
