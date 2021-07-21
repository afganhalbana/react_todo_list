import { GET_PRODUCT } from '../constant';

const initialState = {
  products: [],
  product: {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  }
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export default productReducer;