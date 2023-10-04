import {Link} from 'react-router-dom'

export function Home(){
    return(
        <div>
            <h1>Bem vindo a página HOME!</h1>
            <span>Essa é nossa primeira página com navegação </span>
            <br />
            <br />
            <Link to="/sobre">Sobre</Link> 
            <br />
            <Link to="/contato">Contato</Link>
            <br />  
            <Link to="/perfil">Perfil</Link> 
        </div> 
    )
}