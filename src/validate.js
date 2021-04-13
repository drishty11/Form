function validate(text) {
    let error = {}

    if (!text.Username.trim()) {
        error.Username = "This field is required*";

    }
    if (!text.email.trim()) {
        error.email = "This field is required*";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text.email)) {
        error.email = "Not a valid Email";
    }

    if (!text.password.trim()) {
        error.password = "This field is required*";
    } else if (text.password.length < 6) {
        error.password = "Password must be 6 Character or more";
    }

    if (!text.ConfirmPass.trim()) {
        error.ConfirmPass = "This field is required*";
    } else if (text.password !== text.ConfirmPass) {
        error.ConfirmPass = "Password do not match ";
    }

    return error;
}

export default validate;