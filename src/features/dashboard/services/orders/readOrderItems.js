import {api} from '../../../../lib/api';

export const readOrderItems = orderId => {
    return new Promise((resolve, reject) => {
        // Configuration options
        const config = {headers: {"Content-Type":"application/json"}};
        // Sends request to GET /api/orders/:orderId/orderItems
        api.get(`/api/orders/${orderId}/items`, config)
        .then(response => resolve(response.data.orderItems))
        .catch(err => reject(err.response.data.message));
    });
}