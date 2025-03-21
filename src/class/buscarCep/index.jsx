import { useState } from 'react'
import styles from './style.module.css'

export default function BuscarCep(){
    
    // const cep = '04961090'
    // const cepFinal = fetch(`viacep.com.br/ws/${cep}/json/`)

    // function handleBuscarCep() {
    //     console.log(cepFinal.)
    // }


    const [ cep, setCep] = useState('')
    const [data, setData] =useState(null)

    const handleBuscar = () => {
        if(!cep) return
        fetch(`https:/viacep.com.br/ws/${cep}/json/`)
        // o primeiro then vai trazer se ele foi resolvido
        .then(res => res.json())
        // aqui sim eu vou trazer o resultado
        .then(result => setData(result))

    }

    console.log(cep, 'debug cep')
    console.log(data, 'debug data')




    
    return (

        <div className={styles.container}>
            <h1 className={styles.title}>Busque o Seu CEP:</h1>
            <input onChange={(e) => setCep(e.target.value)} minLength={8} type="number"  className={styles.input} />
            <button  disabled={cep.length < 8 ? true : false} onClick={handleBuscar} className={styles.button}>Pesquisar</button>


            {
                data && (
                    <div className="">
                          <p>Endereço: {data.logradouro} </p>
                          <p>Cidade: {data.localidade}</p>
                          <p>Bairro: {data.bairro}</p>
                          <p>Estado: {data.estado}</p>

                    </div>
                  
                )
            }
        </div>



        // <div className="container">
             
        //      
        //      <button onClick={handleBuscarCep}>Buscar</button>
        // </div>
       
      
    )
}