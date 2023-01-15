
const feedbackForm = document.querySelector('.feedback-form');
const objData = {
    email: '',
    message:''
}
const STORAGE_KEY = "feedback-form-state";
const jsonObjData = localStorage.getItem(STORAGE_KEY);
const parseJsonObjData = JSON.parse(jsonObjData);

feedbackForm.addEventListener('input', storageFeedback)

function storageFeedback(e) {
   if(e.target.name === 'email') {
       objData.email = e.target.value;
   } else if (e.target.name === 'message') {
       objData.message = e.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData))
}

function fillMemoryData(obj) {
    
}






