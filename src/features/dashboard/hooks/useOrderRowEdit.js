import {useContext} from 'react';
import { StateContext } from '../../../context/StateContext';
import {DashboardContext} from '../context/DashboardContext';
import {OrderContext} from '../context/OrderContext';
import {editOrder} from '../services/editOrder';

export default function useOrderRowEdit(){
    // All orders
    const {orders, setOrders} = useContext(DashboardContext);

    // Order selected
    const {setOrderSelected, setAnchorOptions} = useContext(OrderContext);

    // Edits order row on click
    const editOrderOnClick = (event, orderId) => {
        // Stops other events from executing
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
            // // Changes loading state of the application
            // // from not loading to loading
            // setLoading(true);

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

    return {
        editOrderOnClick
    }
}