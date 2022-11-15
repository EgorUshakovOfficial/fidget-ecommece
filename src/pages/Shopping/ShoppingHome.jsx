import {
    ShoppingLayout,
    ShoppingGallery,
    EmailSubscription
} from '../../features/shopping/index';


export default function ShoppingHome(){
    return (
        <ShoppingLayout>
            <ShoppingGallery />
            <EmailSubscription />
        </ShoppingLayout>
    )
}