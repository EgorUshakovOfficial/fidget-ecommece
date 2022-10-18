import { Fragment } from 'react';
import Header from '../components/Header';
import CartSlider from '../components/CartSlider';
import Footer from '../components/Footer';
import {StateProvider} from '../context/StateContext';
export default function Layout({children}){
    return (
        <StateProvider>
            <Header />
            {children}
            <CartSlider />
            <Footer />
        </StateProvider>
    )
}