import React from 'react'
import ItemProducts from './ItemProducts'
import SaleProducts from './SaleProducts'
const Products = ({ products, sale, addProduct, deleteProduct }) => {
  let total = 0;
  for (let i = 0; i < sale.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (sale[i].id === products[j].id) {
        total+=sale[i].cant*products[j].price
      }

    }
  }
return(
  <div>
    
    <ul className=" bg-light fixed-bottom mb-0  " title="cobrar">
    <button type="button" class="btn  boton">COBRAR</button>
    <p>s/.{total}</p>
      {sale.map((element, index) =>
        <SaleProducts className="" key={index} id={element.id} products={products} cant={element.cant} />
      )}
    </ul>
    

    <div className="row m-0 p-0 w-100">

      {products.map(element =>
        <ItemProducts key={element.id} products={element} addProduct={addProduct} deleteProduct={deleteProduct} />
      )}
    </div>

  </div>
)
}
export default Products