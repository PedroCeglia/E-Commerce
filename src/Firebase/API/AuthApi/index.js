// Import Auth Reference
import { auth } from "../../FirebaseConfig";

// Import Auth API´s
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updatePassword, updateProfile } from "@firebase/auth";

// Import Database API
import {createUserByDatabase, setUserNameInDatabase} from '../DatabaseApi'


////////////////////////////////////////-------FUNCTIONS--------//////////////////////////////////////

// Listener User Auth
export function listenerUserAuth(setUser){
    onAuthStateChanged(auth, user =>{setUser(user)})
}

// LogOut User
export function logOutUser(){
    auth.signOut()
}

// Sin-In User With Email And Password
export function userSingIn(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{})
    .catch(erro => {
        if(erro){
            const errorCode = erro.code;
            switch (errorCode){
                case 'auth/user-not-found':
                    alert('Não há registro de usuário existente correspondente ao identificador fornecido.')
                    break
                case 'auth/invalid-email':
                    alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                    break
                case 'auth/wrong-password' :
                    alert('Senha Incorreta, tente de novo!')
                    break   
                default:
                    alert('Erro Prencha todos os Campos de Forma Correta')
                    break       
            }
            console.log(errorCode)            
        }           
    })
}

// Create User With Email And Password
export function userCreate(name, email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then( userC => {
        // Get User
        const user = userC.user
        // Set User Name
        setName(name, user.uid)
        // Set User In Database
        createUserByDatabase(email,user.uid)
    }).catch(erro => {
        if(erro){
            const errorCode = erro.code;
            switch (errorCode){
                case 'auth/invalid-email':
                    alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                    break
                case 'auth/email-already-exists':
                    alert('Já existe um usuario com este e-mail!')
                    break
                case 'auth/weak-password':
                    alert('Digite uma senha com no minimo 6 digitos')
                    break   
                case 'auth/email-already-in-use':
                    alert('O email ja esta sendo utlizado')
                    break     
                default:
                    alert('Erro Prencha todos os Campos de Forma Correta')
                    break                             
            }
            console.log(errorCode)               
        }
    })
}

// Set User Name
export function setName(name, id){
    updateProfile(auth.currentUser,{
        displayName:name
    }).then(()=>{
        // set Name In Database
        setUserNameInDatabase(name, id)
    }).catch(erro => {
        console.log(erro.code)
    })
}

// set User Senha
export function setUserPassword(password){
    updatePassword(auth.currentUser, password).then(()=>{
        alert('Parabens, mudou de senha')
    })
}