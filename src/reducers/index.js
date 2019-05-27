// reducers/index.js
/*
import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}*/ 

  // For now, don't handle any actions
  // and just return the state given to us.
export default (state = 0, action) => {
    switch (action.type) {
      case 'TODO':
        return state
      default:
        return state
    }
  }
