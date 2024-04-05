import axios from 'axios';


export const addItem = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  
  // Check if the product already exists in the cart
  const existingItem = cartItems.find((item) => item.productID === product.productID);

  if (existingItem) {
    // If the product exists, update its quantity
    const updatedItems = cartItems.map((item) =>
      item.productID === product.productID ? { ...item, quantity: item.quantity + 1 } : item
    );

    dispatch({
      type: 'CART_ITEMS',
      payload: updatedItems,
    });
  } else {
    // If the product does not exist, add it to the cart
    const updatedItems = [...cartItems, { ...product, quantity: 1 }];

    dispatch({
      type: 'CART_ITEMS',
      payload: updatedItems,
    });
  }
};

export const removeItem = (productID) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;

  // Filter out the item to be removed
  const updatedItems = cartItems.filter((item) => item.productID !== productID);

  dispatch({
    type: 'CART_ITEMS',
    payload: updatedItems,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_CART',
  });
};


// export const addItem = (product) => (dispatch, getState) => {
//   const cartItems = getState().cart.cartItems;
//   // let cartUpdate
//   // const check = cartItems.map(item => {
//   //   if (item.productID === product.productID) {
//   //     const updateQuantity = {
//   //       ...item,
//   //       quantity: item.quantity +1,
//   //     }
//   //   } else {

//   //   }
//   // });
//   const cartUpdate = [...cartItems, product]
//   console.log(cartUpdate)
//   dispatch({
//     type: 'CART_ITEMS',
//     payload: cartUpdate,
//   });
// };