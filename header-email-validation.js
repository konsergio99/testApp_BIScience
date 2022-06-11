function headerValidateEmail(email) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {

        document.getElementById('success-error-text-header').classList.remove("error-text-header");
        document.getElementById('success-error-text-header').className += ' success-text-header'
        document.getElementById('success-error-text-header').innerText = 'Thanks! Please Check Your Email';
        document.getElementById('success-error-block-header').className += ' error-block-visible-header'
        
        setTimeout( () => {
            document.getElementById('success-error-text-header').innerText = ''
        }, 2000)
        
        return true;

    } else {
        document.getElementById('success-error-text-header').classList.remove("success-text-header");
        document.getElementById('success-error-text-header').innerText = 'Please input correct email';
        document.getElementById('success-error-text-header').className += ' error-text-header'
        document.getElementById('success-error-block-header').className += ' error-block-visible-header'

        setTimeout( () => {
            document.getElementById('success-error-text-header').innerText = ''
        }, 2000)
        
        return false;
    }
}