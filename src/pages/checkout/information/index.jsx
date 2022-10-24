import CheckoutLayout from '../../../containers/CheckoutLayout';
import ContactFrom from './ContactForm';
import ShippingForm from './ShippingForm';
export default function Information(){
    return (
    <CheckoutLayout>
        <ContactFrom />
        <ShippingForm />
    </CheckoutLayout>
    )
}