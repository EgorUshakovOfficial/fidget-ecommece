export const createShippingAddress = (address, city, stateProvince, postalCode, country) => {
    return `${address}, ${city} ${stateProvince} ${postalCode}, ${country}`;
}