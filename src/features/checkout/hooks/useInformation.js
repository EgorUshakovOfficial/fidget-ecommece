import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { validateStateProvince } from '../utils/validators';

export default function useInformation(){
    // Navigation
    const navigate = useNavigate();

    const info = sessionStorage.getItem('info')

    // Form required fields
    const [email, setEmail] = useState(() => info ? JSON.parse(info).email : "");
    const [countryRegion, setCountryRegion] = useState(() => info ? JSON.parse(info).countryRegion : "");
    const [firstName, setFirstName] = useState(() => info ? JSON.parse(info).firstName : "");
    const [lastName, setLastName] = useState(() => info ? JSON.parse(info).lastName : "");
    const [address, setAddress] = useState(() => info ? JSON.parse(info).address : "");
    const [apartmentSuite, setApartmentSuite] = useState(() => info ? JSON.parse(info).apartmentSuite : "");
    const [postalCode, setPostalCode] = useState(() => info ? JSON.parse(info).postalCode : "");
    const [stateProvince, setStateProvince] = useState(() => info ? JSON.parse(info).stateProvince : "");
    const [city, setCity] = useState(() => info ? JSON.parse(info).city : "");

    // Information form is submitted
    const infoOnSubmit = e => {
        // Prevent default form from being submitted to the server
        e.preventDefault();

        // Validates if state or province has valid input
        if (validateStateProvince(stateProvince) === "Input is not valid"){
            return;
        }

        const info = {
            email,
            countryRegion,
            firstName,
            lastName,
            address,
            apartmentSuite,
             postalCode,
            stateProvince,
            city
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
        setEmail,
        setCountryRegion,
        setFirstName,
        setLastName,
        setAddress,
        setApartmentSuite,
        setPostalCode,
        setStateProvince,
        setCity,
        infoOnSubmit
    };
}