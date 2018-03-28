import React from 'react';


const PaginaUno = ({navigateTo}) => (
    <div className ="h-100 w-100 d-flex justify-content-center align-items-center flex-column bg-form">
        
    <h2 className="principal-color-text-blue">Caja A</h2>
       <br/>
      <form>
          {/* onChange={(e)=>(console.log(e.target.value))}*/}
          <div className="form-group">
            <div className="form-group">
              <input type="text" placeholder="Nombre" className="form-control font-size" />
            </div>

            <div  className="form-group">
              <input type="text" placeholder="Monto de apertura" className="form-control font-size" />
             </div>
  
            <div  className="form-group">
                <a className="btn bg-pink btn-styles btn-block font-size" href="#/pagina-2" onClick = {() => navigateTo('pagina-2')}> Ingresar</a>
            </div>

          </div>
          
        </form>
         <br />

    </div>
  );

  export default PaginaUno;