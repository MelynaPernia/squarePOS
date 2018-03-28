import React from 'react';
import { connect } from 'react-redux';
import PaginaUno from './components/Form';
import AppCoffe from './components/AppCoffe';
import Caja from './components/Caja';
import Header from './components/Header';



const App = ({paginaActual,navigateTo}) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <PaginaUno navigateTo={navigateTo}/>
    case 'pagina-2':
      return <AppCoffe navigateTo={navigateTo} />
    case 'caja':
      return <Caja navigateTo={navigateTo}/>
    case 'header':
      return <Header navigateTo={navigateTo}/>
    default:
      break;
  }
  return null
}

const mapStateToProps = ({ paginaActual}) => ({
  paginaActual,
});


const mapDispatchToProps = (dispatch) => ({

  navigateTo: (pagina) => {
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
    console.log('parametro pagina', pagina)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
