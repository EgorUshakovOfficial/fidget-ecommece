import {Fragment, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {
    CheckoutLayout,
    InformationSummary,
    PaymentForm
} from '../../features/checkout';
import Loading from '../../components/Loading';
import { StateContext } from '../../context/StateContext';

export default function Payment(){
    // Loading state
    const {loading} = useContext(StateContext);

    if (sessionStorage.getItem('shipping') === null){
        if (sessionStorage.getItem('info') === null){
            return <Navigate to="/checkout/information" />
        }

        return <Navigate to="/checkout/shipping" />
    }

    return (
    <Fragment>
        {loading ?
            <Loading />
            :
            <CheckoutLayout>
                <InformationSummary />
                <PaymentForm />
            </CheckoutLayout>
        }
    </Fragment>
    )
}