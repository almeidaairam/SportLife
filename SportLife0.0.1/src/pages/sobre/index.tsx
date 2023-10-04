import {Link} from 'react-router-dom'

export function Sobre(){
    return(
        <div>
            <h1>Bem vindo a página SOBRE!</h1>
            <br />
            <Link to="/">Home</Link>
            <br />  
            <Link to="/contato">Contato</Link>
            <br />
            <Link to="/perfil">Perfil</Link>
        </div> 
    )
}