// Import Database Reference
import { database } from "../../FirebaseConfig";

// Import Database API´s
import { ref, onValue } from "@firebase/database";

// Get User By Id Listener
export function getUserByIdListener(id, setUser){
    onValue(ref(database,`usuarios/${id}`), snapshot =>{
        if(snapshot.exists){
            setUser(snapshot.val()) 
        }
    })
}
 