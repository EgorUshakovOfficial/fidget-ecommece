import {useContext, useState} from 'react';
import {CustomerContext} from '../context/CustomerContext';

export default function useTableRowEdit(initialValues){
    // User selected
    const {setUserSelected} = useContext(CustomerContext);

    // States
    const [firstName, setFirstName] = useState(initialValues.firstName);
    const [lastName, setLastName] = useState(initialValues.lastName);
    const [email, setEmail] = useState(initialValues.email);
    const [address, setAddress] = useState(initialValues.address);
    const [city, setCity] = useState(initialValues.city);
    const [postalCode, setPostalCode] = useState(initialValues.postalCode);
    const [countryRegion, setCountryRegion] = useState(initialValues.countryRegion);
    const [subscribed, setSubscribed] = useState(() => initialValues.isSubscribed ? "Yes" : "No");

    // Closes and discards edits
    const closeAndDiscardEdits = event => {
        event.stopPropagation();

        // Reset all fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setCity('');
        setPostalCode('');
        setCountryRegion('');
        setSubscribed('');
        setUserSelected({id:"", action:""})
    }

    // Handles name on change
    const handleFirstNameChange = event => setFirstName(event.target.value)

    // Handles first name on change
    const handleLastNameChange = event => setLastName(event.target.value);

    // Handles email on change
    const handleEmailChange = event => setEmail(event.target.value);

    // Handles address on change
    const handleAddressChange = event => setAddress(event.target.value);

    // Handles city on change
    const handleCityChange = event => setCity(event.target.value);

    // Handles postal code on change
    const handlePostalCodeChange = event => setPostalCode(event.target.value);

    // Handles country on change
    const handleCountryRegionChange = event => setCountryRegion(event.target.value);

    // Handles subscription on change
    const handleSubscribedChange = event => setSubscribed(event.target.value);

    return {
        firstName,
        lastName,
        email,
        address,
        city,
        postalCode,
        countryRegion,
        subscribed,
        handleEmailChange,
        handleFirstNameChange,
        handleLastNameChange,
        handleEmailChange,
        handleAddressChange,
        handleCityChange,
        handlePostalCodeChange,
        handleCountryRegionChange,
        handleSubscribedChange,
        closeAndDiscardEdits
    }
}