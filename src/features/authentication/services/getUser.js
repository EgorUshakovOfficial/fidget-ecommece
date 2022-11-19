import {api} from '../../../lib/api';

export const getUser = accessToken => {
    return new Promise(async resolve => {
        // Configuration options
        const configOptions = {
            headers:{"Authorization": `bearer ${accessToken}`}
        };

        let response = await api.get('/user', configOptions);
        let user = response.data;
        resolve(user);
    });
};


