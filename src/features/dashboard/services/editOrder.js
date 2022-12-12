import {api} from '../../../lib/api';

export const editOrder = (orderId, editedFields, config) => {
    return new Promise((resolve, reject) => {
        api.put(`/api/orders/${orderId}`, editedFields, config)
        .then(response => resolve(response.data.order))
        .catch(err => reject(err))
    })
}