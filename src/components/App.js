import React from 'react'
import '../css/main.css'
import Header from './Header'
import Search from './Search'
import Products from '../containers/Products';
import Caja from './Caja'
import SaleProducts from './SaleProducts'

const AppCoffe = () => (
  <div>
    <Header />
    <Search />
    <Products />
    <SaleProducts />
    <Caja />
  </div>
)
export default AppCoffe