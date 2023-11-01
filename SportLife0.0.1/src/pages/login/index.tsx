// import { Link } from 'react-router-dom'
import '../login/login.css'
import { useState } from 'react'



export function Login(){
    const [formData, setFormData] = useState({
        user: '',
        senha: '',
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
                    <h2>Login</h2>
                    <br />
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        name="nome de usuário"
                        value={formData.user}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button id="btt" type="submit">Enviar</button>
            </form>
        </div>
    );
}
    
export default Login;