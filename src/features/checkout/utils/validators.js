// Validates state or province
export const validateStateProvince = input => {
    let stateRegex = /^$|^[a-z]{2}$/i;
    return stateRegex.test(input) ? input : "Input is not valid";
}

// Validates card number and ensures it's exactly 16 digits
export const validateCardNumber = input => {
    let cardNumberRegex = /^$|^\d{16}$/;
    return cardNumberRegex.test(input) ? input : "Card number is not valid";
}

// Validates expiration date by making sure the first two digits
// describe the month and the last two digits describe the day
export const validateExpirationDate = input => {
    let expirationDateRegex = /^$|^(0[1-9]|(1[0-2]))\/\d{2}$/;
    return expirationDateRegex.test(input) ? input : "Expiration date is not valid";
}
