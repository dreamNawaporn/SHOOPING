import { 
    ADD_PRODUCT,
    ADD_QUANTITY,
    REMOVE_QUANTITY,
    FILTER_BY_CATEGORY,
} from "./actionTypes";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

export const addQuantity = ( productId, qunatity) => {
    return {
        type: ADD_QUANTITY,
        payload: { productId, qunatity},
    };
};

export const removeQuantity = (productId) => {
    return {
        type: ADD_QUANTITY,
        payload: productId,
    };
};
export const filterByCategory = (filter) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: { filter},
    };
};