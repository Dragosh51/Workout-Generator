import { FETCHING_PRODUCTS, FETCHED_PRODUCTS, ERROR_FETCH } from '../actions/productActions';

const initState = {
    loading: false,
    error: null,
    products: [],
    createdProduct: undefined,
    itemsPrice: 0,
    statusRedirect: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCHING_PRODUCTS':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'ERROR_FETCH':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'FETCHED_PRODUCTS':
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        default:
            return state;
    }
};