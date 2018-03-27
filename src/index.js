import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const initialState2 = {
    stock: [
        {id_pro:100, nombre: 'producto1', descripcion: 'esta es la descripcion de 1', precio:10, stock: 4, photo: 'aqui va la foto 1'},
        {id_pro:101, nombre: 'producto2', descripcion: 'esta es la descripcion de 2', precio:15, stock:7, photo: 'aqui va la foto 2'},
        {id_pro:102, nombre: 'producto3', descripcion: 'esta es la descripcion de 3', precio:5, stock: 5, photo: 'aqui va la foto 3'},
        {id_pro:103, nombre: 'producto4', descripcion: 'esta es la descripcion de 4', precio:7, stock: 2, photo: 'aqui va la foto 4'}
     ],
    
    ventaActual:{
        tipoPago: {efectivo:78, tarjeta:98},
        productos:[{id:100, cantidad:2},{id:102, cantidad:1}, {id:103, cantidad:4}]
    },

    historialVenta:[{}],

    inicioCaja:100,

    finCaja: 300,

    paginaActual: 'pagina-1'
}



const reducer = (state = initialState2, action) => {
    console.log(state)
	switch (action.type) {
        
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			}
        case 'NAVIGATE_TO':
        console.log('action',action.type);
        console.log('estado',...state)
			return {
                ...state,
				paginaActual: action.pagina
			}
		case 'CHANGE_LANG':
			return {
				...state,
				idiomaActual: action.idioma
            }
        case 'INICIAR_CAJA':
            return {
                ...state,
                inicioCaja:action.inicio
            }
		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
