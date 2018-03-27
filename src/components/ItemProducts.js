import React from 'react';
const ItemProducts = ({ products }) => {
  return (
    <div className="col-12 col-sm-3">
      <img className="img-fluid" src={products.photo} />
      <p>{products.name}</p>
      <p>{products.price}</p>
    </div>
  )
}
export default ItemProducts