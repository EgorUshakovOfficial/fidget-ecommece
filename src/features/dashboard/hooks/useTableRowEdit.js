import {useContext, useState} from 'react';
import {CustomerContext} from '../context/CustomerContext';

export default function useTableRowEdit(initialValues){
    // User selected
    const {setUserSelected} = useContext(CustomerContext);

    // States
    const [name, setName] = useState(initialValues.name);
    const [email, setEmail] = useState(initialValues.email);
    const [shippingAddress, setShippingAddress] = useState(initialValues.shippingAddress);
    const [isSubscribed, setIsSubscribed] = useState(() => initialValues.isSubscribed ? "Yes" : "No");

    // Closes and discards edits
    const closeAndDiscardEdits = event => {
        event.stopPropagation();

        setName('');
        setEmail('');
        setShippingAddress('');
        setUserSelected({id:"", action:""})
    }

    // Handles name on change
    const handleNameChange = event => setName(event.target.value)

    // Handles email on change
    const handleEmailChange = event => setEmail(event.target.value);

    // Handles address on change
    const handleShippingAddressChange = event => setShippingAddress(event.target.value);

    // Handles subscription status
    const handleIsSubscribedChange = e => setIsSubscribed(e.target.value);

    return {
        name,
        email,
        shippingAddress,
        isSubscribed,
        handleEmailChange,
        handleNameChange,
        handleShippingAddressChange,
        handleIsSubscribedChange,
        closeAndDiscardEdits
    }
}