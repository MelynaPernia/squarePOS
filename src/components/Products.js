import React from 'react'
import ItemProducts from './ItemProducts'

const Products = ({products, addProduct}) => (

  <div className="row">
    {products.map(element =>
      <ItemProducts key={element.id} products={element} addProduct={addProduct} />
    )}

  </div>
)
export default Products