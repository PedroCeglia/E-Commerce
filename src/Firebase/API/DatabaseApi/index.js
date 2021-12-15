// Import Database Reference
import { database } from "../../FirebaseConfig";

// Import Database API´s
import { ref, onValue, update, push } from "@firebase/database";


////////////////////////////////////////-------FUNCTIONS--------//////////////////////////////////////


// Get User By Id Listener
export function getUserByIdListener(id, setUser){
    onValue(ref(database,`usuarios/${id}`), snapshot =>{
        if(snapshot.exists){
            setUser(snapshot.val()) 
        }
    })
}

// Add User In Database
export function createUserByDatabase(email, userId){
    update(ref(database,`usuarios/${userId}`),{
        email:email,
        id:userId
    })
} 

// Set User Name In Database
export function setUserNameInDatabase(name, userId){
    update(ref(database,`usuarios/${userId}`),{
        nome:name
    })
}

// Add Produto In Database
export function addProdutoInDatabase(nome, listaDeFotos, precoOg, precoPromo, promoPorc, descricao, listCaracteristica){
    const produtoId = push(ref(database,`anuncios`)).key
    update(ref(database,`anuncios/${produtoId}`),{
        nomeProduto:nome,
        precoOg:precoOg,
        precoPromo:precoPromo,
        promoPorc:promoPorc,
        descricaoProduto:descricao,
        caracteristicas:listCaracteristica,
        fotos:listaDeFotos
    })
}
 