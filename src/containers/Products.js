import { connect } from 'react-redux';
import Products from  '../components/Products'

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (id) => {
            console.log(id)
            dispatch({type: 'ADD_PRODUCT', id})
        }
        // decrementar: (id) => {
        //     console.log(id)
        //     dispatch({type: 'DECREMENTAR_STOCK', id})
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)