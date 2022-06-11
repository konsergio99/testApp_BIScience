function contentValidateEmail(email) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {

        document.getElementById('success-error-text-content').classList.remove("error-text-content");
        document.getElementById('success-error-text-content').className += ' success-text-content'
        document.getElementById('success-error-text-content').innerText = 'Thanks! Please Check Your Email';

        setTimeout( () => {
            document.getElementById('success-error-text-content').innerText = ''
        }, 2000)

        return true;

    } else {
        document.getElementById('success-error-text-content').classList.remove("success-text-content");
        document.getElementById('success-error-text-content').innerText = 'Please input correct email';
        document.getElementById('success-error-text-content').className += ' error-text-content'

        setTimeout( () => {
            document.getElementById('success-error-text-content').innerText = ''
        }, 2000)

        return false;
    }
}