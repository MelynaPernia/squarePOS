import React from 'react'
import ItemProducts from './ItemProducts'
import SaleProducts from './SaleProducts'
const Products = ({ products, sale, addProduct, deleteProduct }) => (
  <div>
    
    <ul className=" bg-light fixed-bottom mb-0 p-0 " title="cobrar">
   {/*  <button type="button" class="btn  boton">COBRAR</button> */}

  <div className="">
  
      <div>
        <div >
         <div className="d-flex justify-content-center w-100">
         <button type="button" className="btn btn-large bg-pink  ml-3 m-20px" data-toggle="modal" data-target="#exampleModalLong" data-backdrop="false">
            Cobrar: 
          </button>
         </div>

          <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">                  
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                 
                <form>
                  <h3>Total:</h3>
                  <hr/>
                  <div className="form-group">
                  
                  <label for="exampleFormControlInput1">Efectivo</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Total a pagar"/>
                  </div>
                 <div className="d-flex justify-content-center w-100">
                 <button type="button" className="btn btn-large bg-pink  ml-3 m-20px" >Realizar cobro</button>
                 </div>
                  <hr/>

                   <div className="form-group">
                  
                  <label for="exampleFormControlInput1">Tarjeta de crédito</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Total a pagar"/>

                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Titular</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputPassword" placeholder="Nombre"/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">N° tarjeta</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" id="inputPassword" placeholder="123455678-998887"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Vencimiento</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" id="inputPassword" placeholder="--/--/--"/>
                    </div>
                  </div>
                <div className="d-flex justify-content-center w-100">
                <button type="button" className="btn btn-large bg-pink  ml-3 m-20px" >Realizar cobro</button>
                </div>
                </form>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>



    {/* ---------------------------- */}
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
export default Products