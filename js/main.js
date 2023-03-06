import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import  { showAlert } from './utils.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

//renderPictures(getPictures());

const onSendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  hideModal();
  showErrorMessage();
};

setOnFormSubmit(async(data)=>{
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);
