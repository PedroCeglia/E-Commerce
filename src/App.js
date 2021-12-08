import React, {useState, useEffect} from 'react'

// Import React Redux
import { connect } from 'react-redux';

// Import Rotas
import Rotas from './Rotas';

// Import AuthAPI
import {listenerUserAuth} from './Firebase/API/AuthApi'

// Import DatabaseAPI
import {getUserByIdListener} from './Firebase/API/DatabaseApi'
import { userActions } from './Store/Duck/user';

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
  useEffect(()=>{
    if(userDatabase != null){
      dispatch(userActions.setUser(true, userDatabase))
    } else{
      dispatch(userActions.setUser(false, {}))
    }
  },[userDatabase, dispatch])

  return (
    <Rotas/>
  );
}

export default connect()(App);
