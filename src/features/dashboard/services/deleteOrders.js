import {api} from '../../../lib/api';

export const deleteOrders = orderIds => {
    // Configuration options
    const options = {
        data:{orderIds},
        headers: {"Content-Type":"application/json"}
    };

    return new Promise((resolve, reject) => {
        api
        .delete('/api/orders', options)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    })
}