import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToDo from '../components/ToDo';
import { getToDos } from '../api/data/toDoData';
import ToDoForm from '../components/ToDoForm';

const ContainerStyle = styled.div`
  width: 644px;
  margin: auto;
  padding: 50px 0;

  h1 {
    color: white;
    text-align: center;
    font-size: 64px;
    font-weight: normal;
  }
`;

function Initialize() {
  const [toDos, setToDos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getToDos().then(setToDos);
  }, []);

  return (
    <ContainerStyle>
      <h1>YOU-DO</h1>
      <ToDoForm obj={editItem} setToDos={setToDos} setEditItem={setEditItem} />
      {toDos.map((todo) => (
        <ToDo
          key={todo.firebaseKey}
          todo={todo}
          setToDos={setToDos}
          setEditItem={setEditItem}
        />
      ))}
    </ContainerStyle>
  );
}

export default Initialize;
