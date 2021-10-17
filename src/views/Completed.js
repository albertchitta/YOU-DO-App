import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCompletedTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function Completed({ todos, setTodos, setEditItem }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    getCompletedTodos().then(setCompletedTodos);
  }, [todos]);

  return (
    <div>
      {completedTodos.length ? (
        completedTodos.map((todo) => (
          <Todo
            key={todo.firebaseKey}
            todo={todo}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
        ))
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
