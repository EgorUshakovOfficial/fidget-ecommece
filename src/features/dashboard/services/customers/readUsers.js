import {api} from '../../../../lib/api';

export const readUsers = () => {
    return new Promise((resolve, reject) => {
        const options = {headers: {"Content-Type": 'application/json'}};
        api.get('/api/users', options)
        .then(response => resolve(response.data))
        .catch(err => reject(err))
    });
}