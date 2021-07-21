import todoReducer from './todo';
import productReducer from './product';
import authenticationReducer from './authentication';
import { combineReducers } from "redux";

export default combineReducers({ todoReducer, productState: productReducer });

/*
  {todoReducer, productReducer}
  {todoReducer: todoReducer, productReducer: productReducer}

*/

/*
todoReducer: {
  todos: [],
  todo: {
    id: 0,
    name: '',
    description: ''
  }
},
productReducer: {
  products: [],
  product: {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  }
}
 */