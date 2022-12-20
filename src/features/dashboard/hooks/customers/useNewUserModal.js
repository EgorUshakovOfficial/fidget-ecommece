import {useState, useContext} from 'react';
import { createNewUser } from '../../services/customers/createNewUser';
import { StateContext } from '../../../../context/StateContext';
import { DashboardContext } from '../../context/DashboardContext';
import { CustomerContext } from '../../context/CustomerContext';

export default function useNewUserModal(){
    // Loading state
    const {setLoading} = useContext(StateContext);

    // Customers
    const {setCustomers} = useContext(DashboardContext);
    const {setOpenNewUserForm} = useContext(CustomerContext);

    // New user fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryRegion, setCountryRegion] = useState('');
    const [address, setAddress] = useState('');
    const [apartmentSuite, setApartmentSuite] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    // Handles close icon click
    const handleCloseIconClick = () => {
        // Resets all the fields of the new user form
        setFirstName('');
        setLastName('');
        setEmail('');
        setCountryRegion('');
        setAddress('');
        setApartmentSuite('');
        setPostalCode('');
        setStateProvince('');
        setCity('');
        setError('');

        // Closes form
        setOpenNewUserForm(false);
    }

    // Handles first name on change
    const handleFirstNameOnChange = e => setFirstName(e.target.value);

    // Handles last name on change
    const handleLastNameOnChange = e => setLastName(e.target.value);

    // Handles email on change
    const handleEmailOnChange = e => setEmail(e.target.value);

    // Handles country or region on change
    const handleCountryRegionOnChange = e => setCountryRegion(e.target.value);

    // Handles address on change
    const handleAddressOnChange = e => setAddress(e.target.value);

    // Handles apartment or suite on change
    const handleApartmentSuiteOnChange = e => setApartmentSuite(e.target.value);

    // Handles postal code on change
    const handlePostalCodeOnChange = e => setPostalCode(e.target.value);

    // Handles state or province on change
    const handleStateProvinceOnChange = e => setStateProvince(e.target.value);

    // Handles city on change
    const handleCityOnChange = e => setCity(e.target.value);

    // Submits new user form
    const newUserOnSubmit = e => {
        // Prevents form from being submitted to the server
        e.preventDefault();
        // Changes loading state of the application
        // from not loading to loading
        setLoading(true);

        // Body data
        const data = {
            firstName,
            lastName,
            email,
            countryRegion,
            address,
            apartmentSuite,
            postalCode,
            stateProvince,
            city
        };

        // Header options
        const options = { headers: { "Content-Type":"application/json" } };

        // Creates new user in the database
        // and renders them out in the table
        createNewUser(data, options)
        .then(user => {
            setCustomers(state => [...state, user]);
            setOpenNewUserForm(false);
        })
        .catch(err => {
            // Reset the values of all fields in the form
            setFirstName('');
            setLastName('');
            setEmail('');
            setCountryRegion('');
            setAddress('');
            setApartmentSuite('');
            setPostalCode('');
            setStateProvince('');
            setCity('');

            // Sets error message
            setError(err)
        })
        .finally(() =>{
            setLoading(false);
        });

    }

    return {
        firstName,
        lastName,
        email,
        countryRegion,
        address,
        apartmentSuite,
        postalCode,
        stateProvince,
        city,
        error,
        handleCloseIconClick,
        handleFirstNameOnChange,
        handleLastNameOnChange,
        handleEmailOnChange,
        handleCountryRegionOnChange,
        handleAddressOnChange,
        handleApartmentSuiteOnChange,
        handlePostalCodeOnChange,
        handleStateProvinceOnChange,
        handleCityOnChange,
        newUserOnSubmit
    }
}