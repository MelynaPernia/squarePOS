import React from 'react'
import ItemProducts from './ItemProducts'

const Products = ({ data }) => (

  <div className="row">
    {data.products.map(element =>
      <ItemProducts key={element.id} products={element} />
    )}

  </div>
)
export default Products