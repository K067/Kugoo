import valid from './modules/valid';
import formSending from './modules/formSending';
import maskPhone from './modules/maskPhone';

valid();
formSending({
    id: 'form',
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
maskPhone('[name="user_phone"]', '+7 (___) ___-__-__');
