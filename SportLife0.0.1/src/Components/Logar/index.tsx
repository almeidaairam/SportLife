import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../service/firebaseConnection'; // Importe sua instância do Firebase
import { useNavigate } from 'react-router-dom';
import './login.css'

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      onLogin();
      navigate('/home')
    } catch (error) {
      console.error('Erro no login:'+error);
    }
  };

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <div>
                <p>Não possui cadastro?<a href="/">Cadastre-se</a></p>
                </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;