import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeToCart(id) {
  return { type: REMOVE_FROM_CART, id };
}
