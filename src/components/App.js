import React from 'react'
import Header from './Header'
import Search from './Search'
import Products from './Products';

const AppCoffe = ({data}) => (
  <div>
    {/* {console.log(data)} */}
    <Header />
    <Search />
    <Products data = {data}/>
  </div>
)
export default AppCoffe