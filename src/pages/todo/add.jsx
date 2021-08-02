import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../../store/action/todo';

const Add = (props) => {
  const [todo, setTodo] = useState({
    name: '',
    description: '',
  });

  const onChangeInput = (type) => (e) => {
    setTodo({
      ...todo,
      [type]: e.currentTarget.value,
    });
  };

  const handleInput = (e, inputType) => {
    e.preventDefault();
    onChangeInput(e.target.value, inputType);
  };

  const onClickButton = () => {
    props.createTodo(todo);
  };
  // space / spasi
  // tab di keyboard
  // tab di keyboard itu biasanya adalah 2 space
  return (
    <div>
      Add Todo Page
      <div>
        <form>
          <div>
            {
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label>Name</label>
            }
            <input type="text" value={todo.name} onChange={handleInput('name')} />
          </div>
          <div>
            <label htmlFor="description">
              Description
              <input id="description" type="text" value={todo.description} onChange={handleInput('description')} />
            </label>
          </div>
          <div>
            <button type="button" onClick={onClickButton}>CREATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(addTodo(todo)),
});

Add.propTypes = {
  createTodo: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default connect(null, mapDispatchToProps)(Add);
