import React from 'react'



const Caja = () => (
    <div className="cont-padre">
        <h1>Cuadre de cajas</h1>
        <h2>Ventas del Día </h2>
        <hr/>
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
    </div>    
)
export default Caja