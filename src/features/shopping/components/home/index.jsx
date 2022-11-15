import ShoppingLayout from '../../containers/layouts/ShoppingLayout';
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
