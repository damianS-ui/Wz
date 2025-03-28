// const - deklaracja zmiennej, która nie zmienia wartości w trakcie trwania programu
// # - odwołanie do id
// . - odwołanie do klasy(class)
const userName = document.querySelector('input#username');
const email = document.querySelector('input#email');
const haslo = document.querySelector('input#haslo');
const haslo2 = document.querySelector('input#haslo2');
const terms = document.querySelector('input#terms');
const resetButton = document.querySelector('input.reset');
const submitButton = document.querySelector('input.submit');

function showOrHideErrorMessage(input, text) {
    const box = input.parentElement;
    const errorMsg = box.querySelector('p.error_message');
    errorMsg.textContent = text;
}

function checkInputsLength(input, minLength) {
    if (input.value.length < minLength) {
        console.log("pole jest za krótkie");
        showOrHideErrorMessage(input, `Pole ${input.previousElementSibling.textContent.
        toLowerCase().replace(":","")} powinno zawierać minimum ${minLength} znaki`);
    } else {
        showOrHideErrorMessage(input, "");
    }
}
function checkPasswords(){
if(haslo.value !== haslo2.value){
    showOrHideErrorMessage(haslo2, "Hasła są różne");
}else{
    showOrHideErrorMessage(haslo2, "");
}

}
function checkTerms(){
    if(!terms.checked){
        showOrHideErrorMessage(terms, "Zaakceptuj regulamin");
    }else{
        showOrHideErrorMessage(terms, "");
    }
}
function checkEmail(){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if (re.test(email.value)){
    showOrHideErrorMessage(email, "adres email nieprawidlowy");
}else{
    showOrHideErrorMessage(email, "");
}
  
}
resetButton.addEventListener('click', () => {
    const errorMassages = [...document.querySelectorAll('p.error_message')];
    errorMassages.forEach((error)=> {
        error.textContent ="";
    })
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkTerms();
    checkPasswords();
    checkEmail();
    checkInputsLength(userName, 4);
    checkInputsLength(haslo, 5);
});
