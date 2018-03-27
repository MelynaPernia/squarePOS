import React from 'react';


const Caja = ({ navigateTo, mostrandoContacto }) => (
<div> Caja aquí<br />
     <a href="#/pagina-1"
      onClick={() => navigateTo('pagina-2')}
      >Regresar al menu de productos </a><br />
    </div>
);

export default Caja;