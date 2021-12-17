import React, {useState, useEffect} from 'react'

// Import React Redux
import { connect } from 'react-redux';

// Import Rotas
import Rotas from './Rotas';

// Import AuthAPI
import {listenerUserAuth} from './Firebase/API/AuthApi'

// Import DatabaseAPI
import {getUserByIdListener, getProdutosInDatabase, getProdutoCarrosel, getProdutoMaisVendidos} from './Firebase/API/DatabaseApi'

// Import Redux Actions
import { userActions } from './Store/Duck/user';
import {produtoActions} from './Store/Duck/produtos'

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
    } else{
      setUserDatabase(null)
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

  // Get Produtos
  const [produtoList, setProdutosList] = useState([])
  useEffect(()=>{
    getProdutosInDatabase(setProdutosList)
  },[]) 
  useEffect(()=>{
    dispatch(produtoActions.setProdutos(produtoList))
  },[produtoList, dispatch])

  // Get Produtos Mais Vendidos
  const [maisVendidosList, setMaisVendidosList] = useState([])
  useEffect(()=>{
    getProdutoMaisVendidos(setMaisVendidosList)
  },[]) 
  useEffect(()=>{
    dispatch(produtoActions.setProdutosMaisVendidos(maisVendidosList))
  },[maisVendidosList, dispatch])

  // Get Produtos Carrosel
  const [carroselList, setCarroselList] = useState([])
  useEffect(()=>{
    getProdutoCarrosel(setCarroselList)
  },[]) 
  useEffect(()=>{
    dispatch(produtoActions.setProdutosCarrosel(carroselList))
  },[carroselList, dispatch])

  return (
    <Rotas/>
  );
}

export default connect()(App);
