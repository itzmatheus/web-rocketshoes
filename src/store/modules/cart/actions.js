import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
  UPDATE_AMOUNT,
} from './types';

export function addToCartRequest(id) {
  return {
    type: ADD_TO_CART_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: ADD_TO_CART_SUCCESS,
    product,
  };
}

export function removeToCart(id) {
  return { type: REMOVE_FROM_CART, id };
}

export function updateAmount(id, amount) {
  return {
    type: UPDATE_AMOUNT,
    id,
    amount,
  };
}
