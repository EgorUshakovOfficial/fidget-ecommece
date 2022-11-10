export const validatePassword = password => {
    // All these check for the existence of an uppercase,
    // lowercase, number and length; that is, password requirements
    const passwordErrorMessages = [];
    let uppercaseRegex = /(?=.*[A-Z])/;
    let lowercaseRegex = /(?=.*[a-z])/;
    let numberRegex = /(?=.*\d)/;
    let lengthRegex = /.{8,}/;


    // Password must contain lowercase
    if (lowercaseRegex.test(password)){
        passwordErrorMessages.push('A lowercase letter');
    }

    // Password must contain uppercase
    if (uppercaseRegex.test(password)){
        passwordErrorMessages.push("A capital(uppercase) letter");
    }

    // Password must contain a number
    if (numberRegex.test(password)){
        passwordErrorMessages.push('A number')
    }

    // Password must be at least 8 characters long
    if (lengthRegex.test(password)){
        passwordErrorMessages.push('Minimum 8 characters');
    }

    return passwordErrorMessages;
}

export const validateNumericalInput = input => {
    let numericalRegex = /^0?$|^0\.\d*$|^[1-9](\d*\.)?\d*$/;
    return numericalRegex.test(input) ? "" :"Input is not valid";
}