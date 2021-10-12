import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { deleteToDos, updateToDos } from '../api/data/toDoData';

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
    <div>
      <Alert color="light" role="alert">
        {todo.complete ? (
          'DONE'
        ) : (
          <button
            onClick={() => handleClick('complete')}
            className="btn btn-success"
            type="button"
          >
            COMPLETE
          </button>
        )}
        {todo.name}
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
    </div>
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
