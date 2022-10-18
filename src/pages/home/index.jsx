import Layout from '../../containers/Layout';
import ShoppingGallery from './ShoppingGallery';
import EmailSubscription from './EmailSubscription';

export default function Home(){
    return (
        <Layout>
            <ShoppingGallery />
            <EmailSubscription />
        </Layout>
    )
}