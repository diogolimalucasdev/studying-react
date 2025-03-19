import { useState } from "react";

export default function Count() {

    // o count é meu estado da variavel, o setcount é quando eu vou definir o estado da variavel = o useState eu vou definir um novo valor
    const [count, setCount]= useState(0)

    function handleConsole() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    function addCount(){
        setCount(count + 10)
    }

    function declineCount(){
        setCount(count - 1)
    }

    if(count >= 10){
        console.log('Numero passou de 10')
    }


    return (
        <div className="">
            <h1>Count: {count}</h1>
            <button onClick={handleConsole}>+</button>
            <button onClick={resetCount}> Reset</button>
            <button onClick={declineCount}> -</button>
            {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            <button onClick={addCount}> +10 </button>
         
          
        </div>
    )
}