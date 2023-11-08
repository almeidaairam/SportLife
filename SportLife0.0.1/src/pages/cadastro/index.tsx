import '../cadastro/cadastro.css'
import { useState, FormEvent } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {db} from '../../service/firebaseConnection'
import {
    addDoc,
    collection,
    // onSnapshot,
    // query,
    // orderBy,
    // doc,
    // deleteDoc,
} from 'firebase/firestore'



export function Cadastro(){
    const navigate = useNavigate();
    const [nome, setNome] = useState("")
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function Cadastrar(e: FormEvent) {
        e.preventDefault();
        if (nome === " " || user === "" || email === "" || senha === "") {
            alert("Preencha todos os campos")
            return
        }

    //     addDoc(collection(db, "CADASTRO"), {
    //         nome: nome,
    //         nome_usuario: user,
    //         email: email,
    //         senha: senha,
    //         created: new Date()

    //     })
    //         .then(() => {
    //             console.log("CADASTRADO COM SUCESSO")
    //             navigate("/", { replace: true })

    //         })
    //         .catch((error) => {
    //             console.log("ERRO AO CADASTRAR NO BANCO" + error)
    //         })
    }

    return (
        <div >
            <form onSubmit={Cadastrar}>
                <div>
                    <h2>Cadastro</h2>
                    <br />
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        name="nome de usuário"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button id="btt" type="submit">Enviar</button>
            </form>
        </div>
    );
}   
export default Cadastro;

