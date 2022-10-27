import {Navigate} from 'react-router-dom';
import CheckoutLayout from '../../../containers/CheckoutLayout';
import InformationForm from './InformationForm';
export default function Information(){
    return (
        <CheckoutLayout>
            <InformationForm />
        </CheckoutLayout>
    )
}