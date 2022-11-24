import {useState, useContext} from 'react';
import { StateContext } from '../../../context/StateContext';

export default function useShoppingService(_id, stock, price, title, imageUrl){
    const [numItem, setNumItem] = useState(1);
    const {setCart} = useContext(StateContext);

    // Increments the quantity of the product by one
    const handleProductIncrement = () => {
        setNumItem(state => {
            if (state + 1 <= stock){
                return state + 1;
            }
            return state;
        })
    };

    // Decrements the quantity of the product by one
    const handleProductDecrement = () => {
        setNumItem(state => {
            if (state > 1){
                return state-1;
            }
            return state;
        })
    };

    // Adds specific quantity of the product to shopping cart
    const handleAddToCart = e => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === _id);
            if (index !== -1){
                let prevItem = cart[index];
                cart[index] = Object.assign(prevItem, {quantity: numItem, cost: price})
                return cart;
            }

            // Update cart in session storage
            cart = [
                ...cart,
                {
                    name:title,
                    id: _id,
                    cost: price,
                    image: imageUrl,
                    quantity: numItem,
                }

            ];
            return cart;
        })
    }

    return {
        numItem,
        handleProductIncrement,
        handleProductDecrement,
        handleAddToCart
    }
}