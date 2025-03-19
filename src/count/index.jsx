import { useState } from "react";

export default function Count() {
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
            {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            <button onClick={addCount}> +10 </button>
            <button onClick={resetCount}> Reset</button>
            <button onClick={declineCount}> -</button>
        </div>
    )
}