function aboutUsValidation() {

    let aboutUsName = document.forms.aboutUs.elements.usernameValidator.value;
    let aboutUsEmail = document.forms.aboutUs.elements.userEmailValidator.value;

    console.log(aboutUsName);

    let validNameRegex = /^[a-zA-Z0-9]+$/;
    let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (aboutUsName.match(validNameRegex)) {
        document.getElementById('success-error-text-name').classList.remove("error-text-name");
        document.getElementById('success-error-text-name').className += ' success-text-name'
    } else {
        document.getElementById('success-error-text-name').classList.remove("success-text-name");
        document.getElementById('success-error-text-name').innerText = 'Please input correct name ';
        document.getElementById('success-error-text-name').className += ' error-text-name'

        setTimeout( () => {
            document.getElementById('success-error-text-name').innerText = ''
        }, 2000)

        return false;
    }

    if (aboutUsEmail.match(validEmailRegex)) {
        document.getElementById('success-error-text-email').classList.remove("error-text-email");
        document.getElementById('success-error-text-email').className += ' success-text-email'
    } else {
        document.getElementById('success-error-text-email').classList.remove("success-text-email");
        document.getElementById('success-error-text-email').innerText = 'Please input correct email';
        document.getElementById('success-error-text-email').className += ' error-text-email'

        setTimeout( () => {
            document.getElementById('success-error-text-email').innerText = ''
        }, 2000)
        
        return false;
    }
    
    if (aboutUsEmail.match(validEmailRegex) && aboutUsName.match(validNameRegex)) {
        document.getElementById('success-error-text-form').classList.remove("error-text-form");
        document.getElementById('success-error-text-form').className += ' success-text-form'
        document.getElementById('success-error-text-form').innerText = 'Thanks, We will contact you shortly';
        
        return true;
    }
    
    
}