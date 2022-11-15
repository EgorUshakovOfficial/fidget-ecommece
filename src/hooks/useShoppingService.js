import {useState, useEffect, useMemo} from 'react';
export default function useShoppingService(){
    // Controls sliding functionality of cart slider
    const [openCart, setOpenCart] = useState(false);

    // State of cart
    const [cart, setCart] = useState(() => {
        let itemsInCart = JSON.parse(sessionStorage.getItem('cart'));

        if (!itemsInCart){
            return [];
        }

        else if (itemsInCart.length !== 0){
            return itemsInCart;
        }

        return []
    });

    // Total
    const total = useMemo(() => {
        return cart.reduce((totalCost, {cost, quantity}) => totalCost + cost*quantity, 0)
    }, [JSON.stringify(cart)]);

    // Update session storage whenever cart changes
    useEffect(() => {
       sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // Handle shopping cart slider
    const handleShoppingCartSlider = () => {
        setOpenCart(state => !state)
    }

    return {
        openCart,
        setOpenCart,
        cart,
        total,
        setCart,
        handleShoppingCartSlider
    }
}