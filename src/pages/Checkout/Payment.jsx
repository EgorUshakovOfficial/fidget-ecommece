import {Navigate} from 'react-router-dom';
import {
    CheckoutLayout,
    InformationSummary,
    PaymentForm
} from '../../features/checkout';


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