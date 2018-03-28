import React from 'react'
import ItemProducts from './ItemProducts'
import SaleProducts from './SaleProducts'
const Products = ({ products, sale, addProduct, deleteProduct }) => (
  <div>
    <ul>
      {sale.map((element, index) =>
        <SaleProducts key={index} id={element.id} products={products} cant={element.cant} />
      )}
    </ul>    

      <div className="row m-0 p-0 w-100">
      
        {products.map(element =>
          <ItemProducts key={element.id} products={element} addProduct={addProduct} deleteProduct={deleteProduct}/>
        )}
      </div>
    
  </div>
)
export default Products