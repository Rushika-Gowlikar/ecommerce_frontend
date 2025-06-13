'use client';
export const initialState = {
  cartItem: []
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exist = state.cartItem.find(item => item._id === action.payload._id);
      if (exist) return state;
      console.log("Adding to cart:", state);
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItem: state.cartItem.filter(item => item._id !== action.payload._id)
      };
      
    default:
      return state;
  }
}
