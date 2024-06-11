import validPlus from "./validPlus";
import application from "./application";
import defaultModal from "./defaultModal";
import formSending from "./formSending";

const submitForm = () => {
    const statusBlock = document.createElement('div');
    const invalidText = 'invalid fields';
    const form = document.querySelectorAll('.global');
    const emailButton = document.querySelector('.email-button');

    statusBlock.classList.add('just-validate-error-label')

    emailButton.addEventListener('click', e => {
        e.preventDefault();
        const formElements = document.querySelector('.discount-form');
        const formData = new FormData(formElements);

        if (validPlus(formElements.querySelectorAll('input'))) {
            formSending(formData, formElements.getAttribute('action')).then(() => {

                defaultModal();
                application(document.querySelector('.application'));

                formElements.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });

            }).catch(() => {
                alert('error');
            });
        } else {
            document.querySelector('.input-group-email').append(statusBlock);
            statusBlock.style.color = 'red';
            statusBlock.textContent = invalidText;

            setTimeout(() => { statusBlock.textContent = ''; }, 5000);
        }
    });

    form.forEach(data => {
        const validation = new JustValidate(data, {
            errorFieldCssClass: 'is-invalid',
        });
        validation
            .addField('input[name=user_phone]', [
                {
                    rule: 'required',
                    errorMessage: 'Phone',
                },
            ])
            .addField('input[name=user_check]', [
                {
                    rule: 'required',
                    errorMessage: 'check it'
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
                        alert('error');
                    });
                } else {
                    const formPolicy = document.querySelector('.form-policy');
                    const modalPolicy = document.querySelector('.modal-policy');
                    if (document.querySelector('.modal-native').style.display === 'flex') {
                        modalPolicy.append(statusBlock);
                        statusBlock.style.color = 'red';
                        statusBlock.textContent = invalidText;
                    } else {
                        formPolicy.append(statusBlock);
                        statusBlock.style.color = 'red';
                        statusBlock.textContent = invalidText;
                    }

                    setTimeout(() => { statusBlock.textContent = ''; }, 5000);
                }
            });
    });
}

export default submitForm;
