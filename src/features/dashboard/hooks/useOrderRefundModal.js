import {useState, useMemo, useContext} from 'react';
import {OrderContext} from '../context/OrderContext';

export default function useOrderRefundModal(){
    // Order selected and order items
    const {setOrderSelected, setOrderItems, orderItems} = useContext(OrderContext);

    const [orderItemsSelected, setOrderItemsSelected] = useState([...orderItems]);

    // Calculates subtotal when the list of selected order items is updated
    let subtotal = useMemo(() => {
        return orderItemsSelected
        .reduce((subtotal, item) => subtotal + item.product.price, 0);
    }, [orderItemsSelected]);

    // Selects which order items are to be refunded
    const selectOrderItem = (event, orderItemId) => {
        setOrderItemsSelected(state => {
            // Index of the specified order item
            let index = orderItemsSelected.findIndex(item => item._id === orderItemId);

            // Checks if the order item is not already selected
            if (index === -1){
                // Order item selected
                let orderItemSelected = orderItems.filter(item => item._id === orderItemId)[0];
                return [...state, orderItemSelected];
            }

            // Remove the specified order item from the array
            return [...state.slice(0, index), ...state.slice(index+1)];
        })
    };

    // Cancels and discards any changes in order refund modal
    const cancelOrderRefund = () => {
        // Resets order selected and order items
        setOrderSelected({id:"", action:""});
        setOrderItems([]);
    }


    return {
        orderItemsSelected,
        subtotal,
        selectOrderItem,
        cancelOrderRefund
    }
}