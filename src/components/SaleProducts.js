import React from 'react'


const SaleProducts = ({ id, cant, products }) => {
  const pr = products.find(product => product.id === id);
  return (
    <div>
  <span className="fi-check"></span>    
    <li className="lista">
    <p>{ `${pr.name}  -  x${cant}   -  ${pr.coin}${pr.price * cant}`} </p>
    </li>
   </div>
    )
}
export default SaleProducts