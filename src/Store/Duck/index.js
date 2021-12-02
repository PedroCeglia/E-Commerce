// Import Redux
import { createStore } from "redux";

// Import User
import user from "./user";

// Create Store
const store = createStore(user) 

// Export Store to src/index.js
export default store