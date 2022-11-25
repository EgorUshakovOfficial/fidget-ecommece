import {api} from '../../../lib/api';

export const purchaseProducts = (data, configOptions) => {
    return new Promise(async resolve => {
        let response = await api.post('/api/orders', data, configOptions);
        let orderDetails = response.data;
        resolve(orderDetails);
    });
};

