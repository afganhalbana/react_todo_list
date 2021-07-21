import { GET_PRODUCT } from '../constant';

export const getProduct = () => {
  console.log('ini sudah di dalam get product')
  return {
    type: GET_PRODUCT,
    payload: [
      {
        id: 1,
        name: 'iPhone 11',
        description: 'ini iPhone 11',
        quantity: 7,
        price: 12000,
      },
      {
        id: 2,
        name: 'iPhone 12',
        description: 'ini iPhone 12',
        quantity: 8,
        price: 13000,
      },
      {
        id: 3,
        name: 'iPhone 13',
        description: 'ini iPhone 13',
        quantity: 9,
        price: 14000,
      },
    ],
  };
};

// export const getTodoById = (id) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload: id,
//   };
// };

// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// export const updateTodo = (payload) => {
//   return {
//     type: UPDATE_TODO,
//     payload,
//   };
// };

// export const deleteTodo = (id) => {
//   return {
//     type: DELETE_TODO,
//     payload: id,
//   };
// };

export default { getProduct };