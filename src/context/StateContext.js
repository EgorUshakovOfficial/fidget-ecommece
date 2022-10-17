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

    console.log(cart); 




    // Handle shopping cart slider 
    const handleShoppingCartSlider = () => {
        setOpenCart(state => !state)
    }

    
    return (
        <StateContext.Provider value={{
            openCart, 
            setOpenCart,
            setCart,
            handleShoppingCartSlider
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext}; 
