import {Navigate} from 'react-router-dom';
import {
    CheckoutLayout,
    ShippingForm,
    InformationSummary
} from '../../features/checkout';

export default function Shipping(){
    // Information has not been filled out prior to the user visiting this page
    if (sessionStorage.getItem('info') === null)
        return <Navigate to="/checkout/information" />

    return (
        <CheckoutLayout>
            <InformationSummary />
            <ShippingForm />
        </CheckoutLayout>
    )
}