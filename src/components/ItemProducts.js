import React from 'react'
const ItemProducts = ({ products,  addProduct }) => (
  <div className="col-12 col-sm-3">
    <img className="img-fluid" src={products.photo} />
    <p>{products.name}</p>
    <p>{products.price}</p>
    <div>
      <button id="increment" type="button" className="btn btn-primary btn-sm" 
       onClick={() => addProduct(products.id)}
      >+</button>
      <button id="decrement" type="button" className="btn btn-secondary btn-sm" >-</button>
    </div>
  </div>
)
export default ItemProducts