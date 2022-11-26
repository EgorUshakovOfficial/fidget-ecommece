import {Navigate} from 'react-router-dom';
import { CheckoutLayout,  InformationForm} from '../../features/checkout';

export default function Information(){
    // Redirect user back to shopping page if cart is empty
    if (sessionStorage.getItem('cart') === null){
        return <Navigate to="/" replace />
    }

    return (
        <CheckoutLayout>
            <InformationForm />
        </CheckoutLayout>
    )
}