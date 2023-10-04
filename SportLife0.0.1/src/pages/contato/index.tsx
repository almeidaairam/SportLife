import {Link} from 'react-router-dom'

export function Contato(){
    return(
        <div>
            <h1>Bem vindo a página Contato!</h1>
            <br />
            <Link to="/">Home</Link> 
            <br />
            <Link to="/sobre">Sobre</Link> 
            <br />
            <Link to="/perfil">Perfil</Link>
        </div> 
    )
}