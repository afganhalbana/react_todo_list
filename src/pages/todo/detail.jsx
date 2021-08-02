import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getTodoById } from '../../store/action/todo';

const Detail = (props) => {
  const { todo, getTodoDetailById } = props;
  const { match } = useRouter();

  useEffect(() => { // Component Didmount life cycle
    getTodoDetailById(match.params.id);
  }, [getTodoDetailById, match.params.id]);

  return (
    <div>
      {JSON.stringify(todo)}
      Detail Todo Page
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoDetailById: (id) => dispatch(getTodoById(id)),
});

Detail.propTypes = {
  todo: PropTypes.objectOf(PropTypes.object()).isRequired,
  getTodoDetailById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
