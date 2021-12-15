// Storage Reference
import {storage, storageEvent} from '../../FirebaseConfig'

// Import Uid
import { v4 as uuidv4 } from 'uuid';

// Add Image In Storage
export function addImageInStorage(file, setPostId, setUrl){
    console.log('posepose des dos 12')
    const uidPost = uuidv4()
    const uploadTask = storage.ref().child(`imagens/postagens/${uidPost}`).put(file)
    uploadTask.on(storageEvent,
        snapshot =>{
            // Funções de Ciclo de Vida
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        error => {},
        ()=>{
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                setPostId(uidPost)
                setUrl(downloadURL)
            })
        }
    )
}

// Remover Produto
export function deleteProdutoInStorage(uidProduto){
    const produtoRef = storage.ref().child(`imagens/postagens/${uidProduto}`)
    produtoRef.delete()
}
