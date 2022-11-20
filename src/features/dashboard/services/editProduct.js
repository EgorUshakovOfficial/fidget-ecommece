import {api} from '../../../lib/api';

export const editProduct = (productId, editedFields, configOptions) => {
    return new Promise(async resolve => {
        let response = await api.put(`/api/product/${productId}`, editedFields, configOptions);
        let updatedFields = response.data;
        resolve(updatedFields);
    })
}