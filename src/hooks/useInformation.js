import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

export default function useInformation(){
    // Navigation
    const navigate = useNavigate();

    // Form required fields
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

    // Information form is submitted
    const infoOnSubmit = e => {
        // Prevent default form from being submitted to the server
        e.preventDefault();

        // Save form field values of information form in session storage
        if (typeof apartmentSuite.current === "object")
            apartmentSuite.current = ""


        const info = {
            'email': email.current,
            'countryRegion': countryRegion.current,
            'firstName': firstName.current,
            'lastName': lastName.current,
            'address': address.current,
            'apartmentSuite': apartmentSuite.current,
             'postalCode': postalCode.current,
            'stateProvince': stateProvince.current,
            'city': city.current
        };

        sessionStorage.setItem('info', JSON.stringify(info));

        // After values are saved in session storage, redirect user to shipping page
        navigate('/checkout/shipping');

    }

    return {
        email,
        countryRegion,
        firstName,
        lastName,
        address,
        apartmentSuite,
        postalCode,
        stateProvince,
        city,
        handleEmail,
        handleCountryRegion,
        handleFirstName,
        handleLastName,
        handleAddress,
        handleApartmentSuite,
        handlePostalCode,
        handleStateProvince,
        handleCity,
        infoOnSubmit
    };
}