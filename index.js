const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === ''){
        setErrorFor(firstname , 'First Name cannot be empty');
    } else {
        setSuccessFor(firstname);
    }
    if(lastnameValue === ''){
        setErrorFor(lastname,'Last Name cannot be empty');
    } else {
        setSuccessFor(lastname);
    }

    if(emailValue === ' '){
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        // setErrorFor(password, 'Password cannot be blank');
        setErrorFor(password,'Password cannot be empty');
    } else if (!isPasswordSecure(passwordValue)){
        setErrorFor(password, 'Password is not strong enough.');
    } else {
        setSuccessFor(password);
    }
    // show a success message
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.textContent = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.remove('error');
    formControl.classList.add('success');

    const small = formControl.querySelector('small');
    small.textContent = '';
    
    formControl.className = 'form-control success'; 
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(email);
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
