import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function ToDo({ todo }) {
  return (
    <div>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {todo.name}
        <button className="btn btn-danger" type="button">
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
  }).isRequired,
};
