import React from 'react';


const PaginaDos = ({ navigateTo, mostrandoContacto }) => (

    <div> Pagina dos aqui<br />
     <a href="#/pagina-1"
      onClick={() => navigateTo('pagina-1')}
      >Regresar a la pagina 1</a><br />   
      <a href="#/caja"
      onClick={() => navigateTo('caja')}
      >prueba a la caja</a>

    </div>
  );

  export default PaginaDos;