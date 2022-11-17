import {api} from '../../../lib/api';

export const deleteProduct = async productId => {
    const configOptions = {
        headers:{'Content-Type':'application/json'}
    };

    return new Promise(async resolve => {
        let response = await api.delete(`/api/product/${productId}`, configOptions);
        let deletedProductId = response.data.productId;
        resolve(deletedProductId);
    });
}