export default function Fetch(){

    // mock, algo que nao esta em produção mas uso pra ver se meu codigo funciona
    const url = 'https://viacep.com.br/ws/04961090/json/'
    fetch(url)


    // esperanndo uma resposta do url
    .then(res => {
        if(!res.ok){
            throw new Error('Cep nao encontrado: ' + res.status)
        }
        return res.json()
    })

    // vai trazer os dados da API
    .then(data => {
        console.log('Dados recebidos:', data)
    })

    // vai trazer o real error
    .catch(err => {
        console.error('Eror', err)
    })
      
    return <h1>fetch</h1> 
}