import { useActionState, useState } from 'react'
import Arrowdown from './arrowdown.svg'
import Arrowup from './arrowup.svg'
import './style.css'
export default function Accordion() {

    const [active, setActive] = useState(false)

    function handleAccordion() {
        return setActive(!active)
    }

    return (
        <div className="accordion-container">
            <div className="accordion-top">
                <h3><strong> Question text goes here</strong></h3>
                {/* o botao vai chamar minha função de setar o estado */}
                <button onClick={handleAccordion}>
                    <img src={active? Arrowdown: Arrowup} alt="" />
                </button>

            </div>

            {
                //  aqui é como se fosse um if, se for True ele vai mostrar meu codigo, se nao ele nem vai passar aqui 
                // aqui eu uso quando eu quero mostrar so quando for verdade ai eu uso active && - true
                active &&
                <div className="accordin-bottom">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
            }

        </div>
    )
}