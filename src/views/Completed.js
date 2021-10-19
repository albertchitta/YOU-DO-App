import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTodos } from '../api/data/todoData';
import CategorizedTodos from '../components/CategorizedTodos';

export default function Completed({ todos, setTodos, setEditItem }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTodos(true).then((todoArray) => {
      if (isMounted) setCompletedTodos(todoArray);
    });
    return () => {
      isMounted = false;
    }; // cleanup function
  }, [todos]);

  return (
    <div>
      {completedTodos.length ? (
        <CategorizedTodos
          todos={completedTodos}
          setTodos={setTodos}
          setEditItem={setEditItem}
        />
      ) : (
        <h3>Add A YOU DO!</h3>
      )}
    </div>
  );
}

Completed.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
