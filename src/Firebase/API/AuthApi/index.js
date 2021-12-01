// Import Auth Reference
import { auth } from "../../FirebaseConfig";

// Import Auth API´s
import { onAuthStateChanged } from "@firebase/auth";

// Listener User Auth
function listenerUserAuth(setUser){
    onAuthStateChanged(auth, user =>{setUser(user)})
}