import { getProduct } from '../../store/action/product';
import { addToCart } from '../../store/action/cart';
import { connect } from 'react-redux';
import './style.css';

const Cart = () => (
  <div className="col-6">
    list of carts
  </div>
)

const ProductList = ({ products, getTodo }) => (
  <div className="row">
    <div className="col-6">
    Ini adalah product list
    {
      products.map(({id, name, description, quantity, price}) => (
        <div>
          <p>product {id}</p>
          <p>product {name}</p>
          <p>product {description}</p>
          <p>product {quantity}</p>
          <p>product {price}</p>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      ))
    }
    </div>
    { products && products.length > 0 ? null :
    <button onClick={getTodo}>
      Get Todo
    </button>}
    <Cart/>
  </div>
)

const mapStateToProps = (state) => ({
  products: state.productState.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: () => dispatch(getProduct()),
    addToCart: () => dispatch(addToCart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)