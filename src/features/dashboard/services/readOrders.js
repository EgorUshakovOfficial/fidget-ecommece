import {api} from '../../../lib/api';
export const readOrders = () => {
    return new Promise((resolve, reject) => {
        const headers = {headers:{'Content-Type': 'application/json'}};
        api.get('/api/orders', headers)
        .then(response => {
            let orders = response.data;
            resolve(orders);
        })
        .catch(err => reject(err));
    })
};