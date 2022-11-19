import {api} from '../../../lib/api';

export const login = (email, password) => {
    return new Promise(async resolve => {
        let response = await api.post('/login', {email, password});
        let token = response.data;
        resolve(token);
    })
}