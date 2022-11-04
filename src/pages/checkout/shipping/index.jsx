import {Navigate} from 'react-router-dom';
import CheckoutLayout from '../../../containers/layouts/CheckoutLayout';
import ShippingForm from './ShippingForm';
import InformationSummary from './InformationSummary';

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