import { GET_TODO, GET_TODO_BY_ID, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constant';

export const getTodo = () => {
  return {
    type: GET_TODO,
    payload: [
      {
        id: Math.random(),
        name: 'Belajar Fullstack 1',
        description: 'Belajar Fullstack untuk tujuan 1',
      },
      {
        id: Math.random(),
        name: 'Belajar Fullstack 2',
        description: 'Belajar Fullstack untuk tujuan 2',
      },
      {
        id: Math.random(),
        name: 'Belajar Fullstack 3',
        description: 'Belajar Fullstack untuk tujuan 3',
      },
      {
        id: Math.random(),
        name: 'Belajar Fullstack 4',
        description: 'Belajar Fullstack untuk tujuan 4',
      },
    ],
  }
}

export const getTodoById = (id) => {
  return {
    action: GET_TODO_BY_ID,
    payload: id,
  };
};

export const addTodo = (payload) => {
  return {
    action: ADD_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    action: UPDATE_TODO,
    payload,
  };
};

export default {};

export const deleteTodo = (id) => {
  return {
    action: DELETE_TODO,
    payload: id,
  }
}