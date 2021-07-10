import React from 'react';
import { connect } from 'react-redux';

import { getTodo } from '../../store/action/todo';


const List = (props) => {
  // props.getTodo();
  
  return (
    <div>
      List Todo Page
      {JSON.stringify(props.todos)}
      <button onClick={() => props.getTodo()}>
        Get Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: () => dispatch(getTodo()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);