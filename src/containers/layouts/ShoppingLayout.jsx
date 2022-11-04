import { Fragment } from 'react';
import Header from '../../components/Header';
import CartSlider from '../../components/CartSlider';
import Footer from '../../components/Footer';
export default function Layout({children}){
    return (
        <Fragment>
            <Header />
            <div className="shopping-body-content">
                {children}
            </div>
            <CartSlider />
            <Footer />
        </Fragment>
    )
}