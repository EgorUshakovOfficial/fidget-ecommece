import {api} from '../../../../lib/api';

export const createNewUser = (data, options) => {
    return new Promise((resolve, reject) => {
        api.post('/users', data, options)
        .then(response => resolve(response.data.user))
        .catch(err =>reject(err.response.data.error));
    });
}