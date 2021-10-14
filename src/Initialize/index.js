import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import ToDo from '../components/ToDo';
import CategorizedTodos from '../components/CategorizedTodos';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';

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

  h3,
  h4 {
    color: white;
    margin-top: 20px;
  }
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then((todoArray) => {
      setTodos(todoArray);
    });
  }, []);

  return (
    <ContainerStyle>
      <h1>YOU-DO</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <div className="mt-5">
        {todos.length ? (
          <CategorizedTodos
            todos={todos}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
        ) : (
          <h3>Add A YOU DO!</h3>
        )}
      </div>
    </ContainerStyle>
  );
}

export default Initialize;
