import {useState, useMemo, useContext} from 'react';
import { refundOrder } from '../services/refundOrder';
import { DashboardContext } from '../context/DashboardContext';
import {OrderContext} from '../context/OrderContext';

export default function useOrderRefundModal(){
    // Order selected and order items
    const {setOrderSelected, setOrderItems, orderItems, orderSelected} = useContext(OrderContext);

    // Order details
    const {orders, setOrders} = useContext(DashboardContext);
    let orderDetails = orders.filter(item => item._id === orderSelected.id)[0];

    // State
    const [orderItemsSelected, setOrderItemsSelected] = useState([...orderItems]);
    const [error, setError] = useState('');

    // Calculates subtotal when the list of selected order items is updated
    let subtotal = useMemo(() => {
        return orderItemsSelected
        .reduce((subtotal, item) => subtotal + item.product.price, 0);
    }, [orderItemsSelected]);

    // Rounds to two decimal places
    subtotal = Number(subtotal.toFixed(2));

    // Total amount owed to the customer
    let refundAmount = useMemo(() => {
        return subtotal + orderDetails.shippingCost
    }, [subtotal]);


    // Refund status
    let refundStatus = (orderItemsSelected.length === orderItems.length) ? 'complete-refund' : 'partial-refund';

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

    // Refunds requested order from customer
    const refundOrderOnClick = () => {
        // Body data
        let data = {
            orderId: orderSelected.id,
            orderItemIds: orderItemsSelected.map(item => item._id),
            refundAmount,
            refundStatus
        }

        // Configuration options
        let config = {headers:{'Content-Type':'application/json'}};

        // // Sends POST /api/refund, which refunds the customer partially or completely
        refundOrder(data, config)
        .then(status => setOrders(state => {
            // Index of the order details to be updated
            let index = state.findIndex(order => order._id === orderSelected.id);

            // Updates status of the order
            let orderToUpdate = state[index];
            orderToUpdate = Object.assign({}, orderToUpdate, {status});
            state[index] = orderToUpdate;
            return [...state];
        }))
        .catch(message => setError(message))
        .finally(() => {
            // Resets order selected and order items
            setOrderSelected({id:"", action:""});
            setOrderItems([]);
        })
    }

    // Cancels and discards any changes in order refund modal
    const cancelOrderRefund = () => {
        // Resets order selected and order items
        setOrderSelected({id:"", action:""});
        setOrderItems([]);
    }


    return {
        orderDetails,
        orderItemsSelected,
        refundAmount,
        subtotal,
        selectOrderItem,
        refundOrderOnClick,
        cancelOrderRefund
    }
}