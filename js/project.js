console.log('Regular expression');

const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

// console.log(uname, email, phone);

uname.addEventListener('blur', () => {
    console.log('name is blured');
    //validate name here
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    let str = uname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        uname.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('Your name is not valid');
        uname.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email is blured');
    //validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blured');
    //validate phone here
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validName, validPhone);
    
    // Submit your form here
    if(validEmail && validName && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})