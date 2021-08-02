import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getTodo as getTodoAction } from '../../store/action/todo';

const List = (props) => {
  const { todos, getTodo } = props;
  const { history } = useRouter();

  const onClickGetButton = (id) => () => {
    history.push(`/todo/${id}`);
  };

  const onClickEditButton = (id) => {
    history.push(`/todo/${id}/update`);
  };

  return (
    <div>
      List Todo Page
      {
        todos.map((element) => (
          <div key={element.id}>
            <p>{element.id}</p>
            <p>{element.name}</p>
            <p>{element.description}</p>
            <div>
              <button type="button" onClick={onClickGetButton(element.id)}>Get</button>
              <button type="button" onClick={onClickEditButton(element.id)}>Edit</button>
            </div>
          </div>
        ))
      }

      <button type="button" onClick={() => getTodo()}>
        Get Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
});

const mapDispatchToProps = (dispatch) => ({
  getTodo: () => dispatch(getTodoAction()),
});

List.propTypes = {
  todos: PropTypes.objectOf(PropTypes.array).isRequired,
  getTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
