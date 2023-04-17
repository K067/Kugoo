import maskPhone from './modules/maskPhone';
import submitForm from './modules/submitForm';
import modal from './modules/modal';

modal();
maskPhone('[name="user_phone"]', '+7 (___) ___-__-__');
submitForm();