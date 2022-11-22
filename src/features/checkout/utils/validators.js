// Validates state or province
export const validateStateProvince = input => {
    let stateRegex = /^$|^[a-z]{2}$/i;
    return stateRegex.test(input) ? input : "Input is not valid";
}

// Validates card number and ensures it's exactly 16 digits
export const validateCardNumber = input => {
    let cardNumberRegex = /^$|^\d{16}$/;
    return cardNumberRegex.test(input) ? input : "Input is not valid";
}

// Validates expiration date by making sure the first two digits
// describe the month and the last two digits describe the day
export const validateExpirationDate = input => {
    let expirationDateRegex = /^$|^(0[1-9]|(1[0-2]))\/([012][1-9]|3[01])$/;
    return expirationDateRegex.test(input) ? input : "Input is not valid";
}
