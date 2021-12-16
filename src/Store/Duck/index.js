// Import Redux
import { createStore, combineReducers } from "redux";

// Import User
import user from "./user";
import produtos from "./produtos";

// CombineReducers
const reducer = combineReducers({
    user:user,
    produtos:produtos
})

// Create Store
const store = createStore(reducer) 

// Export Store to src/index.js
export default store