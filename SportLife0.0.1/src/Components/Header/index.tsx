import { Link } from "react-router-dom";
import './header.css'

export function Header(){
    return(
        <header>

            <h2>SportLife<img src="./src/assets/img/logo_medalha.PNG" alt="" /></h2>

            
            <div>
                <Link to="/perfil">
                <br />
                Meu Perfil</Link>
                {/* <Link to="/"> 
                <br />
                HOME </Link> */}
                <Link to="/sobre">
                <br />    
                Sobre </Link>
                <Link to="/contato">
                <br />    
                Contato</Link>
            </div>
                </header>


    )
}