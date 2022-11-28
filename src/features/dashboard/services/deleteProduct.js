import {api} from '../../../lib/api';

export const deleteProduct = productId => {
    const configOptions = {
        headers:{'Content-Type':'application/json'}
    };

    return new Promise((resolve, reject) => {
        api
        .delete(`/api/product/${productId}`, configOptions)
        .then(response => {
            let deleteProductId = response.data.productId;
            resolve(deleteProductId);
        })
        .catch(err => reject(err));
    });
}