import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTodos } from '../api/data/todoData';
import CategorizedTodos from '../components/CategorizedTodos';

export default function All({ todos, setTodos, setEditItem }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setAllTodos);
  }, [todos]);

  return (
    <div>
      {allTodos.length ? (
        <CategorizedTodos
          todos={allTodos}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : (
        <h3>Add A YOU DO!</h3>
      )}
    </div>
  );
}

All.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
