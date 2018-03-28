import React from 'react'

const SaleProducts = ({ id, cant, products }) => {
  const pr = products.find(product => product.id === id);
  return (
    <li>
      <p>{` ${pr.name}  cant:${cant}`}</p>
    </li>)
}
export default SaleProducts