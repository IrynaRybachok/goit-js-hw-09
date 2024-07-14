const formData = {
    email: "",
    message: "",
}

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

populateForm();

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    if (!email.value || !message.value){
        alert("Fill please all fields");
        return;
    }else{
        console.log(formData);
        }

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

function handleFormInput(){
    formData.email = email.value.trim();
    formData.message = message.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm(){
    let savedFormData = {};

    try {
        savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (err){
        console.log(err);
        return;
    }

    if (!savedFormData){
        return;
    }

    email.value = savedFormData.email;
    message.value = savedFormData.message;    
}

// variant 2

// let formData = {
//     email: "",
//     message: "",
// }

// const STORAGE_KEY = "feedback-form-state";

// const form = document.querySelector(".feedback-form");

// populateForm();
// form.addEventListener("input", handleFormInput);
// form.addEventListener("submit", handleFormSubmit);

// function handleFormInput(event){
//     const value = event.target.value.trim();
//     const key = event.target.name;

//     // витягує з ЛС дані та зберігає їх в formData. А також може додати новий ключ в існуючий обʼєкт
//     formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     if(formData){
//         formData[key] = value;
//     } else{
//         formData = {
//             [key]: value,
//         }
//     }
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function handleFormSubmit(event){
//     event.preventDefault();

//     if(!form.elements.email.value || !form.elements.message.value){
//         alert("Fill please all fields");
//         return;
//     } else {
//         console.log(formData)
//     }
//     localStorage.removeItem(STORAGE_KEY)
//     event.currentTarget.reset();
// }

// function populateForm(){
//     let sevedFormData = {};

//     try {sevedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))
//     }catch(err){
//         console.log(err);
//         return;
//     }
    
//     if(!sevedFormData){
//         return;
//     }

//     for(const key in sevedFormData){
//         form.elements[key].value = sevedFormData[key];
//     }
// }