import React from 'react'
import ItemProducts from './ItemProducts'
import SaleProducts from './SaleProducts'
const Products = ({ products, sale, addProduct, deleteProduct }) => (
  <div>
    <ul>
      {/* {console.log(products)} */}
      {sale.map((element, index) =>
        <SaleProducts key={index} id={element.id} products={products} cant={element.cant} />
      )}
    </ul>

    <div className="row">


      {products.map(element =>
        <ItemProducts key={element.id} products={element} addProduct={addProduct} sale={addProduct} deleteProduct={deleteProduct} />
      )}
    </div>
  </div>
)
export default Products