export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELECT_PRODUCT = 'DELECT_PRODUCT'

export function addProduct(id) {
  return {
    type: ADD_PRODUCT,
    id
  }
}
export function delectProduct(id) {
  return {
    type: DELECT_PRODUCT,
    id
  }
}
