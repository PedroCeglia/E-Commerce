// Import Redux
import { createStore } from "redux";

// Initial State Store
const INITIAL_STATE = {

}

// Reducer Store
function reducer(state=INITIAL_STATE, action){
    return state
}

// Create Store
const store = createStore(reducer) 

// Export Store to src/index.js
export default store