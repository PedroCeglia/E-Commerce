// Type List Produtos
const typeList = {
    SET:'SET_PRODUTOS',
    SET_MAIS_VENDIDOS:'SET_PRODUTOS_MAIS_VENDIDOS',
    SET_CARROSEL:'SET_PRODUTOS_CARROSEL'
}

// Initial State Produtos 
const INITIAL_STATE = {
    produtos:[],
    maisVendidos:[],
    carrosel:[]
}

// Reducer Produtos
export default function produtos(state=INITIAL_STATE, action){
    if(action.type === typeList.SET){
        return{...state, produtos:action.produtos}
    }
    if(action.type === typeList.SET_MAIS_VENDIDOS){
        return{...state, maisVendidos:action.maisVendidos}
    }
    if(action.type === typeList.SET_CARROSEL){
        return{...state, carrosel:action.carrosel}
    }
    return(state)
}

// Produtos Action
export const produtoActions = {
    setProdutos: produtos => ({
        type:typeList.SET,
        produtos:produtos
    }),
    setProdutosMaisVendidos: produtos => ({
        type:typeList.SET_MAIS_VENDIDOS,
        maisVendidos:produtos
    }),
    setProdutosCarrosel: produtos => ({
        type:typeList.SET_CARROSEL,
        carrosel:produtos
    })
}