import './App.css'
import Example from './class/example'
import Js from './class/js'
import Fetch from './fetch'


export default function App() {
  return (
    <div>
     <Js fullName={'Diogo Lima'}  profissao={'Suporte'}/>
     <Example />
     <Fetch></Fetch>
    </div>)
}