import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../api/apiKeys';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

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
  const [user, setUser] = useState(null); // Need in React if a user is loading

  // useEffect(() => {
  //   getTodos(false).then(setTodos);
  // }, []);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // something to happen
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        // TODO: Refactor code for users to only see their todos
        getTodos(false).then(setTodos);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <ContainerStyle>
      {user ? (
        <>
          <Navigation />
          <h1>YOU DO</h1>
          <TodoForm
            obj={editItem}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
          <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </ContainerStyle>
  );
}

export default Initialize;
