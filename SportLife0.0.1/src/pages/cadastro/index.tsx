import '../cadastro/cadastro.css'
import { useState, FormEvent } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {Input} from "../../Components/Input/index"
import {db} from '../../service/firebaseConnection'
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc,
} from 'firebase/firestore'



export function Cadastro(){
    const navigate = useNavigate();
    const [nomeInput, setNome] = useState("")
    const [userInput, setUser] = useState("")
    const [emailInput, setEmail] = useState("")
    const [senhaInput, setSenha] = useState("")

    function Cadastrar(e: FormEvent) {
        e.preventDefault();
        if (nomeInput === " " || userInput === "" || emailInput === "" || senhaInput === "") {
            alert("Preencha todos os campos")
            return
        }

        addDoc(collection(db, "CADASTRO"), {
            nome: nomeInput,
            usuario: userInput,
            email: emailInput,
            senha: senhaInput,
            //created: new Date()

        })
            .then(() => {
                console.log("CADASTRADO COM SUCESSO")
                navigate("/", { replace: true })

            })
            .catch((error) => {
                console.log("ERRO AO CADASTRAR NO BANCO" + error)
            })
    }

    return (
        <div >
            <form onSubmit={Cadastrar}>
                <div>
                    <h2>Cadastro</h2>
                    <br />
                    <label>Nome:</label>
                    <Input
                        type="text"
                        name="nome"
                        value={nomeInput}
                        onChange={(e) => setNome(e.target.value)}
                     
                    />
                </div>
                <div>
                    <label>Nome de usuário:</label>
                    <Input
                        type="text"
                        name="nome de usuário"
                        value={userInput}
                        onChange={(e) => setUser(e.target.value)}
                       
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <Input
                        type="email"
                        name="e-mail"
                        value={emailInput}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <Input
                        type="password"
                        name="senha"
                        value={senhaInput}
                        onChange={(e) => setSenha(e.target.value)}
                       
                    />
                </div>
                <button id="btt" type="submit">Enviar</button>
            </form>
        </div>
    );
}   
