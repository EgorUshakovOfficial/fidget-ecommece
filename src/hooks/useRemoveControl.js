import {useContext} from 'react';
import {StateContext} from '../context/StateContext';

export default function useRemoveControl(id){
    const {setCart} = useContext(StateContext);

    const handleRemoveShoppingItem = () => {
        setCart(cart => {
            cart = cart.filter(product => product.id !== id);
            return [...cart];
        })
    }

    return {handleRemoveShoppingItem}
}