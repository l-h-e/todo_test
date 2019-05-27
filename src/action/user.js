import { createStore } from 'redux'
import rootReducer from './reducers';
// Action creator
const ADD_TODO = 'ADD_TODO';

const addTodo = text => ({
    type: ADD_TODO,
    payload: {
      text
    }
  });
  

  const store = createStore(rootReducer)
  // Async Action creator
function setTodoAsync() {
    return dispatch => {
      setTimeout(() => {
        dispatch(addTodo());
      }, 1000);
    };
  }
  store.dispatch(addTodo('Reactを学ぶ'));