import React, { useState, useEffect } from 'react';
import ToDo from '../components/ToDo';
import { getToDos } from '../api/data/toDoData';
import ToDoForm from '../components/ToDoForm';

function Initialize() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    getToDos().then(setToDos);
  }, []);

  return (
    <>
      <ToDoForm />
      {toDos.map((todo) => (
        <ToDo key={todo.name} todo={todo} />
      ))}
    </>
  );
}

export default Initialize;
