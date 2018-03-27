import React from 'react';
import { connect } from 'react-redux';
import PaginaUno from './components/PaginaUno';
import PaginaDos from './components/PaginaDos';
import Caja from './Caja';



const App = ({paginaActual,navigateTo}) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <PaginaUno navigateTo={navigateTo}/>
    case 'pagina-2':
      return <PaginaDos navigateTo={navigateTo} />
    case 'caja':
      return <Caja navigateTo={navigateTo}/>
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
