import {api} from '../../../../lib/api';

export const editUser = (userId, editedFields, config) => {
    return new Promise((resolve, reject) => {
        api.put(`/api/users/${userId}`, editedFields, config)
        .then(response => resolve(response.data.user))
        .catch(err => reject(err));
    });
}