import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default function CategorizedTodos({ todos, setTodos, setEditItem }) {
  const [categorizedTodos, setCategorizedTodos] = useState({});

  const categoryGroups = () => {
    const sortedObj = todos.reduce((todoObject, currentObject) => {
      const main = todoObject;
      (main[currentObject.category] = main[currentObject.category] || []).push(
        currentObject,
      );
      return main;
    }, {});

    setCategorizedTodos(sortedObj);
  };

  useEffect(() => {
    categoryGroups();
  }, [todos]);

  return (
    <div>
      {Object.keys(categorizedTodos).map((category) => (
        <div key={category}>
          <h4>{category}</h4>
          {categorizedTodos[category].map((todo) => (
            <Todo
              key={todo.firebaseKey}
              todo={todo}
              setTodos={setTodos}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

CategorizedTodos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
