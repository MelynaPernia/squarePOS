import React from 'react'
import ItemProducts from './ItemProducts'
import SaleProducts from './SaleProducts'
const Products = ({ products, sale, addProduct }) => (
  <div>
    <ul>
      {sale.map((element, index) =>
        <SaleProducts key={index} id={element.id}  cant = {element.cant}/>
      )}
    </ul>

    <div className="row">


      {products.map(element =>
        <ItemProducts key={element.id} products={element} addProduct={addProduct} sale={addProduct} />
      )}
    </div>
  </div>
)
export default Products