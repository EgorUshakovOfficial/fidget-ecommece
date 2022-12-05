import {api} from '../../../lib/api';

export const deleteUsers = userIds => {
    // Configuration options
    const options = {
        data:{ userIds},
        headers:{'Content-Type':'application/json'}
    };

    return new Promise((resolve, reject) => {
        api.delete('/api/users', options)
        .then(response => resolve(response.data.deletedUsers))
        .catch(err => reject(err));
    })
}