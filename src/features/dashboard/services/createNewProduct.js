import {api} from '../../../lib/api';

// Creates new product
export const createNewProduct = async (formData, configOptions) => {
    return new Promise(async resolve => {
        let response = await api.post('/api/add-new-product', formData, configOptions);
        let product = response.data;
        resolve(product);
    });
};
