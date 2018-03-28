import React from 'react'

const SaleProducts = ({ id, cant ,products}) => (
  <li>
    {console.log(products)}
    <p>{`id: ${id}  cant:${cant}`}</p>
  </li>
)
export default SaleProducts