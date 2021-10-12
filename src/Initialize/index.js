import React, { useState, useEffect } from 'react';
import ToDo from '../components/ToDo';
import { getToDos } from '../api/data/toDoData';
import ToDoForm from '../components/ToDoForm';

function Initialize() {
  const [toDos, setToDos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getToDos().then(setToDos);
  }, []);

  return (
    <>
      <ToDoForm obj={editItem} setToDos={setToDos} setEditItem={setEditItem} />
      {toDos.map((todo) => (
        <ToDo
          key={todo.firebaseKey}
          todo={todo}
          setToDos={setToDos}
          setEditItem={setEditItem}
        />
      ))}
    </>
  );
}

export default Initialize;
