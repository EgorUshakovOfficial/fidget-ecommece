import {useContext} from 'react';
import {StateContext} from '../../../context/StateContext';

export default function useProductControls(id){
    const {setCart} = useContext(StateContext);

    // Handle increment
    const handleIncrement = () => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === id);
            let itemToBeIncremented = cart[index];
            cart[index] = Object.assign(itemToBeIncremented, {quantity: itemToBeIncremented.quantity + 1})

            // Update session storage
            sessionStorage.setItem("cart", JSON.stringify(cart));
            return [...cart];
        })
    }

    // Handle decrement
    const handleDecrement = () => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === id);
            let itemToBeDecremented = cart[index];
            if (itemToBeDecremented.quantity > 1){
                cart[index] = Object.assign(itemToBeDecremented, {quantity: itemToBeDecremented.quantity - 1})
                return [...cart];
            }
            cart = cart.filter(product => product.id !== id);
            return [...cart];
        })
    }

    return {
        handleIncrement,
        handleDecrement
    }
}