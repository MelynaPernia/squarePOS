import React from 'react'
import ItemProducts from './ItemProducts'

const Products = ({products, addProduct}) => (

  <div className="row">
    {console.log('products', products)}
    {products.map(element =>
      <ItemProducts key={element.id} products={element} addProduct={addProduct} />
    )}

  </div>
)
export default Products