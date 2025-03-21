import { useState } from "react"

export default function Pokemon() {
    <h1>pokemon</h1>
    const [pokemon, setPokemon] = useState('')
    const buscarPokemon = () => {
        let min = 0
        let max = 1093
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
        let numeroPokemon = Math.random(numeroAleatorio)

        console.log(numeroPokemon)
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${34}`)
        .then(res => res.json())
        .then(sorteio => setPokemon(sorteio))
    }

    console.log(pokemon)
    return(
        <div className="">

            <button onClick={buscarPokemon}>Sortear Pokemon</button>
            
            
        </div>
    )
}