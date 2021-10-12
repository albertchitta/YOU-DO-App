import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createToDo, updateToDos } from '../api/data/toDoData';

const initialState = {
  name: '',
  complete: false,
  uid: '',
};
export default function ToDoForm({ obj, setToDos, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput(initialState);
    setEditItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      // update the todo
      updateToDos(formInput).then((todos) => {
        setToDos(todos);
        resetForm();
      });
    } else {
      createToDo({ ...formInput, date: new Date() }).then((todos) => {
        // update the DOM iwth the new Todo
        setToDos(todos);
        // reset the form
        resetForm();
      });
    }
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
        <button type="submit">{obj.firebaseKey ? 'UPDATE' : 'SUBMIT'}</button>
      </form>
    </>
  );
}

ToDoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }),
  setToDos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

ToDoForm.defaultProps = { obj: {} };
