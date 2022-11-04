import {Navigate} from 'react-router-dom';
import CheckoutLayout from '../../../containers/layouts/CheckoutLayout';
import InformationSummary from './InformationSummary';
import PaymentForm from './PaymentForm';

export default function Payment(){
    if (sessionStorage.getItem('shipping') === null){
        if (sessionStorage.getItem('info') === null){
            return <Navigate to="/checkout/information" />
        }

        return <Navigate to="/checkout/shipping" />
    }

    return (
        <CheckoutLayout>
            <InformationSummary />
            <PaymentForm />
        </CheckoutLayout>
    )
}