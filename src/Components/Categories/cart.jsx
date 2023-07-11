let initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART':
            let cart = state.cart;
            let item = payload;
            let isItemExist = false;
            cart.forEach((cartItem) => {
                if (cartItem.name === item.name) {
                    isItemExist = true;
                    cartItem.quantity += 1;
                }
            });
            if (!isItemExist) {
                item.quantity = 1;
                cart.push(item);
            }
            return { cart };
        case 'REMOVE_FROM_CART':
            let newCart = state.cart.filter((item) => item.name !== payload);
            return { cart: newCart };
        default:
            return state;
    }
};


// Actions
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};

export const removeFromCart = (name) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: name,
    };
};



export default cartReducer;









