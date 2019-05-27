
import { createStore } from 'redux'
import rootReducer from '../reducers';
// Action creator
const ADD_TODO = 'ADD_TODO';

const addTodo = text => ({
    type: ADD_TODO,
    payload: {
      text
    }
  });
  

  const store = createStore(rootReducer);
  store.dispatch(addTodo(1));
  store.subscribe(()=>{
    console.log('stateが変更されました。');
    console.log(store.getState());
});
store.dispatch(addTodo(1));
  // Async Action creator
function setTodoAsync() {
    return dispatch => {
      setTimeout(() => {
        dispatch(addTodo());
      }, 1000);
    };
  }
  store.dispatch(addTodo('Reactを学ぶ'));

const TODO = {
     visibilityFilter: 'SHOW_ALL',
     type: 'TODO',
        payload:{
            text:'Reactを学ぶ'
        }
     }

export function showTodo() {
  return TODO;
}
