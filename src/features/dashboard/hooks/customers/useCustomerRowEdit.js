import {useContext, useState} from 'react';
import {StateContext} from '../../../../context/StateContext';
import { DashboardContext } from '../../context/DashboardContext';
import {CustomerContext} from '../../context/CustomerContext';
import { editUser } from '../../services/customers/editUser';

export default function useCustomerRowEdit(initialValues){
    // Loading
    const {setLoading} = useContext(StateContext);

    // All customers
    const {customers, setCustomers} = useContext(DashboardContext);

    // User selected
    const {userSelected, setUserSelected} = useContext(CustomerContext);

    // States
    const [firstName, setFirstName] = useState(initialValues.firstName);
    const [lastName, setLastName] = useState(initialValues.lastName);
    const [email, setEmail] = useState(initialValues.email);
    const [address, setAddress] = useState(initialValues.address);
    const [city, setCity] = useState(initialValues.city);
    const [stateProvince, setStateProvince] = useState(initialValues.stateProvince);
    const [countryRegion, setCountryRegion] = useState(initialValues.countryRegion);
    const [postalCode, setPostalCode] = useState(initialValues.postalCode);
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

    // Handles province or state change
    const handleStateProvinceChange = event => setStateProvince(event.target.value);

    // Handles country on change
    const handleCountryRegionChange = event => setCountryRegion(event.target.value);

    // Handles subscription on change
    const handleSubscribedChange = event => setSubscribed(event.target.value);

    // Handles postal code on change
    const handlePostalCodeChange = event => setPostalCode(event.target.value);

    // Edits user fields in the database
    const editUserOnClick = e => {
        e.stopPropagation();

        // Change loading state of the application from not loading to loading
        setLoading(true);

        // User to be edited
        let userToBeEdited = customers
        .filter(customer => customer._id === userSelected.id)[0];

        // Edited fields of the selected user
        const editedFields = {};

        // Append fields that been changed
        if (userToBeEdited.firstName !== firstName){
            editedFields.firstName = firstName;
        }

        if (userToBeEdited.lastName !== lastName){
            editedFields.lastName = lastName;
        }

        if (userToBeEdited.email !== email){
            editedFields.email = email;
        }

        if (userToBeEdited.address !== address){
            editedFields.address = address;
        }

        if (userToBeEdited.city !== city){
            editedFields.city = city;
        }

        if (userToBeEdited.stateProvince !== stateProvince){
            editedFields.stateProvince = stateProvince;
        }

        if (userToBeEdited.countryRegion !== countryRegion){
            editedFields.countryRegion = countryRegion;
        }

        if (userToBeEdited.postalCode !== postalCode){
            editedFields.postalCode = postalCode;
        }

        // Convert the value of subscribed to boolean value
        let isSubscribed = (subscribed === "Yes") ? true : false;

        if (initialValues.isSubscribed !== isSubscribed){
            editedFields.isSubscribed = isSubscribed
        }

        // Only send request if one or more fields of the selected
        // has been edited

        if (Object.keys(editedFields).length > 0){
            // Headers options
            const config = { headers : { "Content-Type":"application/json" } }

            // Send PUT /api/users/:userId and update edited fields
            // of the specified user in the database
            editUser(userSelected.id, editedFields, config)
            .then(user => setCustomers(customers => {
                let index = customers.findIndex(customer => customer._id === user._id);
                customers[index] = user;
                return [...customers];
            }))
            .catch(err => console.log(err))
            .finally(() => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setAddress('');
                setCity('');
                setPostalCode('');
                setCountryRegion('');
                setSubscribed('');
                setUserSelected({id:"", action:""})
                setLoading(false);
            })
        }

    }

    return {
        firstName,
        lastName,
        email,
        address,
        city,
        stateProvince,
        countryRegion,
        postalCode,
        subscribed,
        handleEmailChange,
        handleFirstNameChange,
        handleLastNameChange,
        handleEmailChange,
        handleAddressChange,
        handleCityChange,
        handleStateProvinceChange,
        handleCountryRegionChange,
        handlePostalCodeChange,
        handleSubscribedChange,
        closeAndDiscardEdits,
        editUserOnClick
    }
}