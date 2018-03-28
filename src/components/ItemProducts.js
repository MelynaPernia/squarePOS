import React from 'react'
const ItemProducts = ({ products, addProduct, deleteProduct }) => (
  <div className="col-12 col-sm-4 col-lg-3 ">
    <div className="border h-400px">
      <img className="img-fluid w-100" src={products.photo} />
      <h3 className="text-center font-weight-light">{products.name}</h3>
      <p className="text-center font-weight-bold">{`${products.coin} ${products.price}`}</p>
      <div className="d-flex justify-content-center">
        <button id="increment" type="button" className="btn btn-primary btn-sm mr-3"
          onClick={() => addProduct(products.id)}
        >+</button>
        <button id="decrement" type="button" className="btn btn-secondary btn-sm"
          onClick={() => deleteProduct(products.id)} >-</button>
      </div>
    </div>
  </div>
)
export default ItemProducts