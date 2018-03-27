import React from 'react'
import '../css/main.css'
import Header from './Header'
import Search from './Search'
import Products from './Products';
import Caja from './Caja'


const AppCoffe = ({data}) => (
  <div>
    {/* {console.log(data)} */}
    <Header />
    <Search />
    <Products data = {data}/>
    <Caja />
  </div>
)
export default AppCoffe