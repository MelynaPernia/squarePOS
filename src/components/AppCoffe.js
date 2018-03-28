import React from 'react'
import '../css/main.css'
import Header from './Header'
import Search from './Search'
import Products from '../containers/Products';


const AppCoffe = ({ navigateTo }) => (
  <div>
     {/* <a href="#/pagina-1"
      onClick={() => navigateTo('pagina-1')}
      >Regresar a la pagina 1</a><br />  */}  
    <Header navigateTo={navigateTo} />
    <Search />
    <Products/>
  </div>
)
export default AppCoffe