import { useEffect, useState } from "react"
export default function Fetch(){
        // dado, seta o dado  = estado inicial
    const [data, setData] = useState([])

    console.log(data, 'estado incial')

    
   

    // mock, algo que nao esta em produção mas uso pra ver se meu codigo funciona
    const url = 'https://viacep.com.br/ws/04961090/json/'

    useEffect(() => {
        console.log('Rodou useEffect')
    }, [])

    // fetch(url)

    // // esperanndo uma resposta do url
    // .then(res => {
    //     if(!res.ok){
    //         throw new Error('Cep nao encontrado: ' + res.status)
    //     }
    //     return res.json()
    // })

    // // vai trazer os dados da API
    // .then(data => {
    //     // inserindo o dado na varivael
    //     return setData(data)
    // })
    
    // // vai trazer o real error
    // .catch(err => {
    //     console.error('Eror', err)
    // })

    console.log(data, 'Estado depois do setData')
    
    return(
       <h1>fetch</h1>
    
    )
}

