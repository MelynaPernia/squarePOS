import { connect } from 'react-redux';
import SalesProducts from '../components/SalesProducts'
import { addProduct } from '../actions/'

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
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SalesProducts)