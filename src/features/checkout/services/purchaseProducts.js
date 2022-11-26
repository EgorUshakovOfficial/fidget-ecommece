import {api} from '../../../lib/api';

export const purchaseProducts = (data, configOptions) => {
    return new Promise((resolve, reject) => {
        api
        .post('/api/orders', data, configOptions)
        .then(response => {
            let orderDetails = response.data;
            resolve(orderDetails);
        })
        .catch(err => reject(err.response.data))
    });
};

