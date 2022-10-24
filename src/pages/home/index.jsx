import ShoppingLayout from '../../containers/ShoppingLayout';
import ShoppingGallery from './ShoppingGallery';
import EmailSubscription from './EmailSubscription';

export default function Home(){
    return (
        <ShoppingLayout>
            <ShoppingGallery />
            <EmailSubscription />
        </ShoppingLayout>
    )
}
