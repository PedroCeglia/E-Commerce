import React, {useState, useEffect, useCallback} from 'react'

// Import React Redux
import { connect } from 'react-redux';

// Import Rotas
import Rotas from './Rotas';

// Import AuthAPI
import {listenerUserAuth} from './Firebase/API/AuthApi'

// Import DatabaseAPI
import {getUserByIdListener} from './Firebase/API/DatabaseApi'

function App({dispatch}) {

  // Get User Auth
  const [userAuth, setUserAuth] = useState()
  useEffect(()=>{
    listenerUserAuth(setUserAuth)
  },[])

  // Get User Database
  const [userDatabase, setUserDatabase] = useState()
  useEffect(()=>{
    if(userAuth != null){
      getUserByIdListener(userAuth.uid, setUserDatabase)
    }
  },[userAuth])

  // Edit User In Redux Store
  const setUserInReduxStore = useCallback( exist => {
    if(exist !== false){
      return {
        type:'SET_USER',
        user:{
          exist:true,
          user:userDatabase
        }
      }      
    } else {
      return {
        type:'SET_USER',
        user:{
          exist:false,
          user:{}
        }
      }
    }
  },[userDatabase])
  useEffect(()=>{
    if(userDatabase != null){
      dispatch(setUserInReduxStore(true))
    } else{
      dispatch(setUserInReduxStore(false))
    }
  },[userDatabase, dispatch, setUserInReduxStore])



  return (
    <Rotas/>
  );
}

export default connect()(App);
