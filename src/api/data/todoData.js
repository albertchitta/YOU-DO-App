import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTodos = (value) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/todos.json?orderBy="complete"&equalTo=${value}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getAllTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/todos.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTodo = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/todos/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTodos(false).then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/todos/${firebaseKey}.json`)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

const updateTodo = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/todos/${obj.firebaseKey}.json`, obj)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

export {
  getTodos, createTodo, deleteTodo, updateTodo, getAllTodos,
};
