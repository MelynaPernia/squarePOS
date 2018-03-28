export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function addProduct(id) {
  return {
    type: ADD_PRODUCT,
    id
  }
}
export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id
  }
}
