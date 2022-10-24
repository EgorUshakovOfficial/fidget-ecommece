import CheckoutLayout from '../../../containers/CheckoutLayout';
import InformationSummary from './InformationSummary';
import PaymentForm from './PaymentForm';

export default function Payment(){
    return (
        <CheckoutLayout>
            <InformationSummary />
            <PaymentForm />
        </CheckoutLayout>
    )
}