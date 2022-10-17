import { Fragment } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import {StateProvider} from '../context/StateContext'; 
export default function Layout({children}){
    return (
        <StateProvider>
            <Header />
            {children}
            <Footer />
        </StateProvider>
    )
}