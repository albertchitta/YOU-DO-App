import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createTodo, updateTodo } from '../api/data/todoData';

const FormStyle = styled.div`
  form {
    display: flex;
    margin-bottom: 40px;
    margin-top: 20px;

    .form-control {
      width: 2056px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .form-select {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .btn {
      margin-left: 10px;
    }
  }
`;

const initialState = {
  name: '',
  complete: false,
  category: '',
  uid: '',
};
export default function TodoForm({ obj, setTodos, setEditItem }) {
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
        category: obj.category,
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
      updateTodo(formInput).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        // update the DOM with the new Todo
        setTodos(todos);
        // reset the form
        resetForm();
      });
    }
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          id="name"
          placeholder="ADD A YOU-DO"
          value={formInput.name}
          onChange={handleChange}
          required
        />
        <select
          className="form-select"
          aria-label="Default select example"
          name="category"
          id="category"
          value={formInput.category}
          onChange={handleChange}
          required
        >
          <option hidden value="">
            Category
          </option>
          <option value="Important">Important</option>
          <option value="Work">Work</option>
          <option value="Chores">Chores</option>
          <option value="Personal">Personal</option>
          <option value="Errands">Errands</option>
        </select>
        <button type="submit" className="btn btn-success">
          {obj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
        </button>
      </form>
    </FormStyle>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    category: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = { obj: {} };
