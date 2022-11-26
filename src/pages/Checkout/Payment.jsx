import {Fragment, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {
    CheckoutContext,
    CheckoutLayout,
    InformationSummary,
    PaymentForm,
    ConfirmationMessage
} from '../../features/checkout';
import Loading from '../../components/Loading';
import { StateContext } from '../../context/StateContext';

export default function Payment(){
    const {orderId} = useContext(CheckoutContext);

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
            orderId ?
                <ConfirmationMessage />
                :
                <CheckoutLayout>
                    <InformationSummary />
                    <PaymentForm />
                </CheckoutLayout>

        }
    </Fragment>
    )
}