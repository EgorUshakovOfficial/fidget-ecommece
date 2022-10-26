import CheckoutLayout from '../../../containers/CheckoutLayout';
import ShippingForm from './ShippingForm';
import InformationSummary from './InformationSummary';
import ShippingMethod from './ShippingMethod';
export default function Shipping(){
    return (
        <CheckoutLayout>
            <InformationSummary />
            <ShippingForm />
        </CheckoutLayout>
    )
}