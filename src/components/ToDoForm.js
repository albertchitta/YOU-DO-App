import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createToDo } from '../api/data/toDoData';

export default function ToDoForm({ obj }) {
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
    uid: obj.uid || '',
  });

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createToDo(formInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

ToDoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }),
};

ToDoForm.defaultProps = { obj: {} };
