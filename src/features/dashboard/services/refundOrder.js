import {api} from '../../../lib/api';

export const refundOrder = (data, config) => {
    return new Promise((resolve, reject) => {
        api.post('/api/refunds', data, config)
        .then(response => resolve(response.data.status))
        .catch(err => reject(err.response.data.message));
    });
};