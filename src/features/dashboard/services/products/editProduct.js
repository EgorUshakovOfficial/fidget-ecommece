import {api} from '../../../../lib/api';

export const editProduct = (productId, editedFields, configOptions) => {
    return new Promise((resolve, reject) => {
        api
        .put(`/api/product/${productId}`, editedFields, configOptions)
        .then(response => {
            let updatedFields = response.data;
            resolve(updatedFields);
        })
        .catch(err => reject(err));
    })
}