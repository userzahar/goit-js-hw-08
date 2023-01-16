const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const inputForm = feedbackForm.elements.email;
const textareaForm = feedbackForm.elements.message;
// const submitBtn = document.querySelector('button');

const objData = { email: '', message:'',}
const STORAGE_KEY = "feedback-form-state";
let jsonObjData = localStorage.getItem(STORAGE_KEY);
let parseJsonObjData = JSON.parse(jsonObjData)  || {};

feedbackForm.addEventListener('input', throttle(storageFeedback, 500));
feedbackForm.addEventListener('submit', onSubmitClick)

function storageFeedback(e) {
   if(e.target.name === 'email') {
       objData.email = e.target.value;
    };
    if (e.target.name === 'message') {
       objData.message = e.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
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

function onSubmitClick(e) {
    e.preventDefault();
    objData.email = inputForm.value;
    objData.message = textareaForm.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
    jsonObjData = localStorage.getItem(STORAGE_KEY);
    parseJsonObjData = JSON.parse(jsonObjData)  || {};
    console.log(parseJsonObjData);
    inputForm.value = '';
    textareaForm.value = '';
    localStorage.removeItem(STORAGE_KEY);
};