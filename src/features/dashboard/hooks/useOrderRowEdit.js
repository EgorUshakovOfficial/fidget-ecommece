import {useContext} from 'react';
import {DashboardContext} from '../context/DashboardContext';
import {OrderContext} from '../context/OrderContext';
import {editOrder} from '../services/editOrder';
import {readOrderItems} from '../services/readOrderItems';

export default function useOrderRowEdit(orderId){
    // All orders
    const {orders, setOrders} = useContext(DashboardContext);

    // Order selected
    const {setOrderSelected, setAnchorOptions, setOrderItems} = useContext(OrderContext);

    // Opens refund modal on click
    const openRefundModalOnClick = event => {
        // Stops other events from being executed
        event.stopPropagation();

        // Retrieves the list of items for specified order
        readOrderItems(orderId)
        .then(orderItems => setOrderItems(orderItems))
        .catch(err => console.log(err))
        .finally(() => {
            setOrderSelected(state => Object.assign({}, state, {action:"refund"}))
            setAnchorOptions(null);
        })
    };

    // Edits order row on click
    const editOrderOnClick = event => {
        // Stops other events from executed
        event.stopPropagation();

        // Selected order status
        let orderStatus = event.currentTarget.getAttribute('value');

        // Index of the order selected
        let orderSelectedIndex = orders.findIndex(order => order._id === orderId);
        let orderToBeEdited = orders[orderSelectedIndex];

        const editedFields = {};

        // Appends edited fields of the existing order
        if (orderToBeEdited.status !== orderStatus){
            editedFields.status = orderStatus;
        }

        if (Object.keys(editedFields).length > 0){
            // Configuration options
            const config = { headers : {"Content-Type":"application/json" } };

            // Sends request to PUT /api/orders/:orderId
            editOrder(orderId, editedFields, config)
            .then(orderDetails => setOrders(state => {
                state[orderSelectedIndex] = orderDetails;
                return [...state];
            }))
            .catch(err => console.log(err))
            .finally(() => {
                setOrderSelected({id:"", action:""})
                setAnchorOptions(null);
            });
        }
    }

    return {openRefundModalOnClick, editOrderOnClick}
}