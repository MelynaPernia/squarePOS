import React from 'react'
import '../css/main.css'
import Header from './Header'
import Search from './Search'
import Products from '../containers/Products';


const AppCoffe = ({ navigateTo }) => (
  <div>
     Pagina dos aqui<br />
     <a href="#/pagina-1"
      onClick={() => navigateTo('pagina-1')}
      >Regresar a la pagina 1</a><br />   
      <a href="#/caja"
      onClick={() => navigateTo('caja')}
      >prueba a la caja</a>
    {/* {console.log(data)} */}
    <Header />
    <Search />
    <Products/>
  </div>
)
export default AppCoffe