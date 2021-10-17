import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';

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

  h3 {
    color: white;
    margin-top: 20px;
    text-align: center;
  }

  h4 {
    color: white;
    margin-top: 20px;
  }
`;

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos(false).then(setTodos);
  }, []);

  return (
    <ContainerStyle>
      <Navigation />
      <h1>YOU-DO</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
    </ContainerStyle>
  );
}

export default Initialize;
