import {api} from '../../../lib/api';

export const deleteUser = userId => {
    // Header options
    const options = {headers:{"Content-Type":"application/json"}};

    return new Promise((resolve, reject) => {
        api.delete(`/api/users/${userId}`, options)
        .then(response => resolve(response.data.user))
        .catch(err => reject(err.response.data.error));
    });
}