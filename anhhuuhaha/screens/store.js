import { createStore } from 'redux';
const initData = {
    id:'',
    username:'',
}

function reducer(state = initData , action) {
    switch (action.type) {
      case 'LOGIN':
        return { id: action.id,
                 username: action.username, }
      default:
        return state
    }
  }

const  store = createStore(reducer);
export default store;