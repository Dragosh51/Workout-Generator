const initState = {
    cartItems: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};