import React from 'react'
const Caja = ({navigateTo}) => (
    <div className="cont-padre">
        
  <div className="card text-center">
    <div className="card-header">
         Featured
    </div>
    <div class="card-body">
        <h5 classNme="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div className="card-footer text-muted">
     2 days ago
    </div>
    </div>






        <h2>Ventas del Día </h2>
        <hr />
        <div className="inicial">
            <h3>Venta Inicial</h3>
            <div className="cont-inicial"></div>
        </div>
        <div className="total">
            <h3>Monto Total</h3>
            <div className="cont-inicial"></div>
        </div>
        <div className="Pagos">
            <h5>Pago Efectivo: {}</h5>
            <h5>Pago Tarjeta: {}</h5>
            <h5>Saldo Apertura: {}</h5>
            <h5>Saldo Final: {}</h5>
        </div>
        <div className="cont-boton">
            <button type="button" className="btn btn-primary">Cuadrar Caja</button>
        </div>
        <a href="#/pagina-1" onClick={() => navigateTo('pagina-2')} >Regresar al menu de productos </a><br />   
    </div>
)
export default Caja