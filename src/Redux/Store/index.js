// Import Redux
import { createStore } from "redux";

// Initial State Store
const INITIAL_STATE = {
    user:{
        exist:false,
        user:{}
    }
}

// Reducer Store
function reducer(state=INITIAL_STATE, action){
    if(action.type === 'SET_USER'){
        return{...state, user:action.user}
    }
    return state
}

// Create Store
const store = createStore(reducer) 

// Export Store to src/index.js
export default store