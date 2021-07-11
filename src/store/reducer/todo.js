import { GET_TODO, GET_TODO_BY_ID, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constant';

const initialState = {
  todos: [],
  todo: {
    id: 0,
    name: '',
    description: ''
  }
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO:
      return {
        ...state,
        todos: payload,
      };
    case GET_TODO_BY_ID:
      const findTodo = state.todos.find(todo => todo.id.toString() === payload.toString());
      return {
        ...state,
        todo: findTodo,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          payload
        ],
      };
    case UPDATE_TODO:
      const todos = state.todos;
      const indexTodo = todos.findIndex(todo => todo.id.toString() === payload.id.toString());
      todos[indexTodo] = payload;
      return {
        ...state,
        todos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        filteredTodos,
      }
    default:
      return state;
  }
};

export default todoReducer;