export default function Js(props){

    // objeto
    let brand = {
        name: 'Suporte',
        foutend: 2023,
        city: 'São Paulo'
    }
    // destruturação de objeto
    const {city} = brand
    return <h1>  nome completo: {props.fullName} profissão: {props.profissao}  cidade: {city}
    </h1>
}