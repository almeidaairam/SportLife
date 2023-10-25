// import { Link } from 'react-router-dom'
import '../cadastro/cadastro.css'
import { useState } from 'react'



export function Cadastro(){
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        valorGasto: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do cliente para onde desejar
        console.log('Dados do cliente:', formData);
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Cadastro</h2>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        name="nome de usuário"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="e-mail"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.valorGasto}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button id="btt" type="submit">Enviar</button>
            </form>
        </div>
    );
}
    
export default Cadastro;






