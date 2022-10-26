import {useRef} from 'react';

export default function useInformation(){
    const email = useRef('');
    const countryRegion = useRef('');
    const firstName = useRef('');
    const lastName = useRef('');
    const address = useRef('');
    const apartmentSuite = useRef('');
    const postalCode = useRef('');
    const stateProvince = useRef('');
    const city = useRef('');

    // Handles email
    const handleEmail = e => {
        email.current = e.target.value;
    }

    // Handles country or region
    const handleCountryRegion = e => {
        countryRegion.current = e.target.value;
    }

    // Handles first name
    const handleFirstName = e => {
        firstName.current = e.target.value;
    }

    // Handles last name
    const handleLastName = e => {
        lastName.current = e.target.value;
    }

    // Handles address
    const handleAddress = e => {
        address.current = e.target.value;
    }

    // Handles apartment or suite
    const handleApartmentSuite = e => {
        apartmentSuite.current = e.target.value;
    }

    // Handles postal code
    const handlePostalCode = e => {
        postalCode.current = e.target.value;
    }

    // Handles state or province
    const handleStateProvince = e => {
        stateProvince.current = e.target.value;
    }

    // Handles city
    const handleCity = e => {
        city.current = e.target.value;
    }

    return {
        handleEmail,
        handleCountryRegion,
        handleFirstName,
        handleLastName,
        handleAddress,
        handleApartmentSuite,
        handlePostalCode,
        handleStateProvince,
        handleCity
    };
}