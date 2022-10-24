import CheckoutLayout from '../../../containers/CheckoutLayout';
import InformationSummary from './InformationSummary';
import ShippingMethod from './ShippingMethod';
export default function Shipping(){
    return (
        <CheckoutLayout>
            <InformationSummary />
            <ShippingMethod />
        </CheckoutLayout>
    )
}