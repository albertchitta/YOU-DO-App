import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getToDos = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/todos.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createToDo = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/todos/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getToDos().then(resolve);
        });
    })
    .catch(reject);
});

export { getToDos, createToDo };
