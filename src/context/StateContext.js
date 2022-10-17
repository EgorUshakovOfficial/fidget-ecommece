import {useState, createContext} from 'react';

// State context
const StateContext = createContext({});

// State provider
const StateProvider = ({children}) => {
    // State
    const [openCart, setOpenCart] = useState(false);
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

    // Handle shopping cart slider
    const handleShoppingCartSlider = () => {
        setOpenCart(state => !state)
    }


    return (
        <StateContext.Provider value={{
            openCart,
            setOpenCart,
            cart,
            setCart,
            handleShoppingCartSlider
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext};
