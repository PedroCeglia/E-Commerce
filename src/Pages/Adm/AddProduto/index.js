import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Input Mask
import InputMask from 'react-input-mask';

// Import React Router
import { useNavigate } from 'react-router';

// Import Storage API
import {addImageInStorage, deleteProdutoInStorage} from '../../../Firebase/API/StorageApi'

// Import Database API
import {addProdutoInDatabase} from '../../../Firebase/API/DatabaseApi'

export default function AddProduto(){

    //Add Images
    const [image1, setImage1] = useState({ url:'../../assets/add.png'})
    const [image2, setImage2] = useState({ url:'../../assets/add.png'})
    const [image3, setImage3] = useState({ url:'../../assets/add.png'})
    const [image4, setImage4] = useState({ url:'../../assets/add.png'})
    const [image5, setImage5] = useState({ url:'../../assets/add.png'})
    const [listImage, setListImage] = useState([])

    const [idPost, setIdPost] = useState('')
    const [urlPost, setUrlPost] = useState('')
    function addImage(file){
        if(file != null){
            if(listImage.length < 5){
                addImageInStorage(file, setIdPost, setUrlPost)
            } else{
                alert('Maximo de 5 Imagens')
            }
        }
    }

    // Adicionando Imagens
    useEffect(()=>{
        if(idPost !== '' && urlPost !== ''){
            let listaImagem = listImage
            listaImagem.push({ url:urlPost, id:idPost})
            setListImage(listaImagem)
            
            setIdPost('')
            setUrlPost('')
        }
    },[idPost, urlPost, listImage])
    useEffect(()=>{
        listImage.forEach((image, id) => {
            switch(id){
                case 0:
                    setImage1({
                        url:image.url,
                        id:image.id
                    })
                    break
                case 1:
                    setImage2({
                        url:image.url,
                        id:image.id
                    })
                    break
                case 2:
                    setImage3({
                        url:image.url,
                        id:image.id
                    })
                    break
                case 3:
                    setImage4({
                        url:image.url,
                        id:image.id
                    })
                    break
                case 4:
                    setImage5({
                        url:image.url,
                        id:image.id
                    })
                    break
                default :
                    break
            }
        })
    },[listImage.length, listImage])

    // Removendo Imagens
    function removeItemImage(index){
        if(listImage[index] != null){
            deleteProdutoInStorage(listImage[index].id)
            let listaImagem = listImage
            listaImagem.splice(index,1)
            setListImage(listaImagem)

            switch(listImage.length){
                case 0:
                    setImage1({
                        url:'../../assets/add.png'
                    })
                    break
                case 1:
                    setImage2({
                        url:'../../assets/add.png'
                    })
                    break
                case 2:
                    setImage3({
                        url:'../../assets/add.png'
                    })
                    break
                case 3:
                    setImage4({
                        url:'../../assets/add.png'
                    })
                    break
                case 4:
                    setImage5({
                        url:'../../assets/add.png'
                    })
                    break
                default :
                    break
            }
            
        }
    }


    // Add Info
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoOg, setPrecoOg] = useState('')
    const [precoPromo, setPrecoPromo] = useState('')
    const [promoPorc, setPromoPorc] = useState('')

    // Add Descrição
    const [produtoDescricao, setProdutoDescricao] = useState('')

    // Add Caracteristicas
    const [caract01, setCaract01] = useState('')
    const [caract02, setCaract02] = useState('')
    const [caract03, setCaract03] = useState('')
    const [caract04, setCaract04] = useState('')
    const [caract05, setCaract05] = useState('')
    const [caract06, setCaract06] = useState('')
    const [caract07, setCaract07] = useState('')

    // useNavigate
    const navigattion = useNavigate()

    // Enviar Produto 
    function salvarProduto(){
        if(listImage.length > 0){
            if(nomeProduto.length > 7){
                if(produtoDescricao.length > 50){
                    if(caract01.length > 6){
                        if(caract02.length > 6){
                            if(caract03.length > 6){
                                let listCarct = []
                                listCarct.push(caract01)
                                listCarct.push(caract02)
                                listCarct.push(caract03)
                                if(caract04.length > 6){listCarct.push(caract04)}
                                if(caract05.length > 6){listCarct.push(caract05)}
                                if(caract06.length > 6){listCarct.push(caract06)}
                                if(caract07.length > 6){listCarct.push(caract07)}
    
                                // Add Produto
                                addProdutoInDatabase(nomeProduto, listImage, precoOg, precoPromo, promoPorc, produtoDescricao, listCarct)
                                navigattion('/adm')
    
                            }else{alert('A característica deve ter no minimo 6 caractéres e o produto precisa de no minimo 3 características')}
                        }else{alert('A característica deve ter no minimo 6 caractéres e o produto precisa de no minimo 3 características')}
                    }else{alert('A característica deve ter no minimo 6 caractéres e o produto precisa de no minimo 3 características')}
                }else{alert('A descrição do produto deve ter no minimo 50 caractéres')}
            }else{alert('O nome do produto deve ter mais de 7 letras')}
        }else{alert('A lista de imagens precisa ter pelomenos uma foto')}
    }     

    return(
        <div className='add-produto-container'>
            <div className='add-images'>
                <div className='add-area'>
                    <input id='input-image-add-produto'
                    onChange={file => {addImage(file.target.files[0])}}
                    type='file'/>
                    <label htmlFor='input-image-add-produto'>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                    </label>
                </div>
                <div className='images-area'>
                    <h2>Imagens do Produto</h2>
                    <span>(Max 5 imagens)</span>
                    <div className='images-content'>
                        <div>
                           <img src={image1.url} alt='Add Icon' title='Add Image'/> 
                           <button onClick={()=>{removeItemImage(0)}} >remover</button>
                        </div>
                        <div>
                           <img src={image2.url} alt='Add Icon' title='Add Image'/> 
                           <button onClick={()=>{removeItemImage(1)}} >remover</button>
                        </div>
                        <div>
                           <img src={image3.url} alt='Add Icon' title='Add Image'/> 
                           <button onClick={()=>{removeItemImage(2)}} >remover</button>
                        </div>
                        <div>
                           <img src={image4.url} alt='Add Icon' title='Add Image'/> 
                           <button onClick={()=>{removeItemImage(3)}} >remover</button>
                        </div>
                        <div>
                           <img src={image5.url} alt='Add Icon' title='Add Image'/> 
                           <button onClick={()=>{removeItemImage(4)}} >remover</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='add-info'>
                <div className='setNameProduto'>
                    <h2>Nome do Produto</h2>
                    <div>
                        <textarea placeholder='nome produto' 
                            value={nomeProduto} onChange={nome => {setNomeProduto(nome.target.value)}}
                        />
                        <img src='../../assets/pencil.png' alt='Pencil Icon'/>
                    </div>
                </div>
                <div className='setPrecoProduto'>
                    <h2>Valor Original do Produto</h2>
                    <div>
                        <InputMask mask='999,99' type='text' placeholder='R$300,00'
                            value={precoOg} onChange={preco => {setPrecoOg(preco.target.value)}}
                        />
                        <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                    </div>
                    <h2>Valor com Desconto do Produto</h2>
                    <div>
                        <InputMask mask='999,99' type='text' placeholder='R$270,00'
                            value={precoPromo} onChange={preco => {setPrecoPromo(preco.target.value)}}
                        />
                        <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                    </div>
                    <h2>Porcentagem do Desconto do Produto</h2>
                    <div>
                        <InputMask mask='99%' type='text' placeholder='R$300,00'
                            value={promoPorc} onChange={preco => {setPromoPorc(preco.target.value)}}
                        />
                        <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                    </div>
                </div>
            </div>
            <div className='add-descricao'>
                <h2>Descrição</h2>
                <textarea placeholder='Descrição :' 
                    value={produtoDescricao} onChange={description => {setProdutoDescricao(description.target.value)}}
                />
            </div>
            <div className='add-caracteristicas'>
                <h2>Características</h2>
                <div>
                    <input type='text' placeholder='01' 
                    value={caract01} onChange={caract => {setCaract01(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='02'
                    value={caract02} onChange={caract => {setCaract02(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='03'
                    value={caract03} onChange={caract => {setCaract03(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='04'
                    value={caract04} onChange={caract => {setCaract04(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='05'
                    value={caract05} onChange={caract => {setCaract05(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='06'
                    value={caract06} onChange={caract => {setCaract06(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
                <div>
                    <input type='text' placeholder='07'
                    value={caract07} onChange={caract => {setCaract07(caract.target.value)}}
                    />
                    <img src='../../assets/pencil.png' alt='Pencil Icon'/> 
                </div>
            </div>
            <div className='confirmar-produto'>
                <h2>Confirmar Produto?</h2>
                <span>Você Poderar Edita-lo Caso Deseje</span>
                <button onClick={salvarProduto}>Salvar</button>
            </div>
        </div>
    )
}