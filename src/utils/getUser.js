import axios from 'axios';
import {BASE_URL} from './constants';

const getUser = async accessToken => {
    let response = await axios.create({
        baseURL: BASE_URL,
        headers:{'Authorization': `bearer ${accessToken}`}
    })
    .get('/getUser');
}


export default getUser;
