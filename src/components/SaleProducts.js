import React from 'react'


const SaleProducts = ({ id, cant, products }) => {
  const pr = products.find(product => product.id === id);
  return (
    <div>
  <span class="fi-check"></span>    
    <li className="lista">
      <p>{` ${pr.name}  cant:${cant}`}</p>
    </li>
    </div>
    )
}
export default SaleProducts