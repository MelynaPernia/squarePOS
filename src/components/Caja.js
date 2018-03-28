import React from 'react'
const Caja = ({navigateTo}) => (
    <div className="cont-padre">
        
  <div className="card text-center">
    <div className="card-header">
         <h2>Ventas del Día </h2>
           
    </div>
    
    <div className="card-body">
    <div className="inicial">
        <h4>N° de ventas</h4>
        <div className="cont-inicial"></div>
    </div>
    <div className="total">
            <h4>Monto Total</h4>
            <div className="cont-inicial">S/.</div>
    </div>
        <div className="Pagos">
            <ul>
                <li>Pago Efectivo: {}</li>
                <li>Pago Tarjeta:  {}</li>
                <li>Saldo Final:  {}</li>
             </ul>   
        </div>
        <div className="cont-boton">
            <button type="button" className="btn btn-color">Cuadrar Caja</button>
        </div>
    </div>
    
    <div className="card-footer text-muted">
    </div>
        <a href="#/pagina-1" onClick={() => navigateTo('pagina-2')} >Regresar al menu de productos </a><br />   
    </div>
    </div>
)
export default Caja