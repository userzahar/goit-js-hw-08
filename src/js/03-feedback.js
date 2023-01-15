
const feedbackForm = document.querySelector('.feedback-form');
const inputForm = feedbackForm.elements.email;
const textareaForm = feedbackForm.elements.message;
// const submitBtn = document.querySelector('button');

const objData = {
    email: '',
    message:''
}
const STORAGE_KEY = "feedback-form-state";
const jsonObjData = localStorage.getItem(STORAGE_KEY);
const parseJsonObjData = JSON.parse(jsonObjData) || {};

feedbackForm.addEventListener('input', storageFeedback);
feedbackForm.addEventListener('submit', )

function storageFeedback(e) {
   if(e.target.name === 'email') {
       objData.email = e.target.value;
    };
    if (e.target.name === 'message') {
       objData.message = e.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData))
}

function fillMemoryData({email, message}) {
    if (!jsonObjData) {
        return;
    } else {
        inputForm.value = email;
        textareaForm.value = message;
    }
}
fillMemoryData(parseJsonObjData);






