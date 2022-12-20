import {api} from '../../../../lib/api';

// Creates new product
export const createNewProduct = async (formData, configOptions) => {
    return new Promise((resolve, reject) => {
        api
        .post('/api/products', formData, configOptions)
        .then(response => {
            let product = response.data;
            resolve(product);
        })
        .catch(err => reject(err));
    });
};
