import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert } from 'reactstrap';
import { deleteToDos, updateToDos } from '../api/data/toDoData';

const TodoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;

  .fade {
    display: flex;
    width: 100%;
  }

  h5 {
    flex-grow: 2;
    margin: auto 20px;
  }

  button {
    color: white;

    &:first-child {
      margin-right: 10px;
    }
  }

  .btn-danger {
    margin-left: 5px;
  }

  .done {
    opacity: 0.5;
  }

  i {
    font-size: 24px;
  }
`;

export default function ToDo({ todo, setToDos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteToDos(todo.firebaseKey).then(setToDos);
    } else {
      // update the value of complete on the todo
      updateToDos({ ...todo, complete: true }).then(setToDos);
    }
  };

  return (
    <TodoStyle>
      <Alert color="light" role="alert">
        {todo.complete ? (
          <button className="btn btn-success done" type="button">
            <i className="fas fa-check-circle" />
          </button>
        ) : (
          <button
            onClick={() => handleClick('complete')}
            className="btn btn-success"
            type="button"
          >
            <i className="fas fa-circle" />
          </button>
        )}
        <h5>{todo.name}</h5>
        <button
          onClick={() => setEditItem(todo)}
          className="btn btn-info"
          type="button"
        >
          EDIT
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </Alert>
    </TodoStyle>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setToDos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
