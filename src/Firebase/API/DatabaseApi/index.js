// Import Database Reference
import { database } from "../../FirebaseConfig";

// Import Database API´s
import { ref, onValue, update, push, remove } from "@firebase/database";


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
    const produtoId = push(ref(database,`anuncios/produtos`)).key
    update(ref(database,`anuncios/produtos/${produtoId}`),{
        nomeProduto:nome,
        precoOg:precoOg,
        precoPromo:precoPromo,
        promoPorc:promoPorc,
        descricaoProduto:descricao,
        caracteristicas:listCaracteristica,
        fotos:listaDeFotos,
        id:produtoId
    })
}

// Remove Produto In Database
export function removeProdutoInDatabase(id){
    remove(ref(database,`anuncios/produtos/${id}`))
}

// Get Produtos In Database
export function getProdutosInDatabase(setProdutosList){
    onValue(ref(database,'anuncios/produtos'), snapshot => {
        let listProduto = []
        if(snapshot.exists()){
            snapshot.forEach(produto => {
                listProduto.push(produto.val())
            })   
        } 
        setProdutosList(listProduto)
    })
}

// Get Produto By Id
export function getProdutoById(id, setProduto){
    onValue(ref(database,`anuncios/produtos/${id}`), snapshot => {
        if(snapshot.exists()){
            setProduto(snapshot.val())
        }
    })
}

// Add Produto In Carrosel 
export function addProdutoInCarrosel(id){
    update(ref(database,`anuncios/carrosel/${id}`),{
        id:id
    })
}

// Remove Produto In Carrosel
export function removeProdutoInCarrosel(id){
    remove(ref(database,`anuncios/carrosel/${id}`))
}

// Add Produto In Mais Vendidos 
export function addProdutoInMaisVendidos(id){
    update(ref(database,`anuncios/maisVendidos/${id}`),{
        id:id
    })
}

// Remove Produto In Mais Vendidos
export function removeProdutoInMaisVendidos(id){
    remove(ref(database,`anuncios/maisVendidos/${id}`))
}

// Get Produtos Carrosel
export function getProdutoCarrosel(setProdutos){
    onValue(ref(database,`anuncios/carrosel`), snapshot => {
        let listProdutos = []
        if(snapshot.exists()){
            snapshot.forEach(produto => {
                listProdutos.push(produto.val())
            })
        }
        setProdutos(listProdutos)
    })
}

// Get Produtos Mais Vendidos
export function getProdutoMaisVendidos(setProdutos){
    onValue(ref(database,`anuncios/maisVendidos`), snapshot => {
        let listProdutos = []
        if(snapshot.exists()){
            snapshot.forEach(produto => {
                listProdutos.push(produto.val())
            })
        }
        setProdutos(listProdutos)
    })
}

// Add Produto In Carrinho
export function addProdutoInCarrinho(id, idProduto, qnt){
    update(ref(database,`carrinho/${id}/${idProduto}`),{
        id:idProduto,
        qnt:qnt
    })
}

// Get Carrinho
export function getProdutoCarrinho(id, setCarrinho){
    onValue(ref(database,`carrinho/${id}`), snapshot => {
        let carrinhoList = []
        if(snapshot.exists()){
            snapshot.forEach(produtoId=>{carrinhoList.push(produtoId.val())})
        }
        setCarrinho(carrinhoList)
    })
}

// Remover Item do Carrinho
export function removeProdutoInCarrinho(id, idProduto){
    remove(ref(database,`carrinho/${id}/${idProduto}`))
}