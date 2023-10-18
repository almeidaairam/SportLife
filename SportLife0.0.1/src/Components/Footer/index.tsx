import { Link } from "react-router-dom";
import './footer.css'

export function Footer() {
    return (
        <footer>
            <p>&copy;SportLife - 2023 - Todos os direitos reservados</p>
            <br />
            <nav>
                <ul>
                    <Link to="/"> Home  </Link>
                    <Link to="/sobre">Sobre  </Link>
                    <Link to="/contato">Contato</Link>
                </ul>
            </nav>
        </footer>


    )
}