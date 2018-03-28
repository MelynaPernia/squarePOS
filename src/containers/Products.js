import { connect } from 'react-redux';
import Products from '../components/Products'
import { addProduct, deleteProduct } from '../actions/'

function mapStateToProps(state) {
  return {
    products: state.products,
    sale: state.sale.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (id) => {
      dispatch(addProduct(id))
    },
    deleteProduct: (id) => {
      dispatch(deleteProduct(id))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)