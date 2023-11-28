import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../service/firebaseConnection'
import { useNavigate } from 'react-router-dom';
import './cadastro.css'

interface RegistrationFormProps {
    onRegister: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    const handleRegister = async () => {
        try {
            //Criar usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            
            //Atualizar o perfil do usuário com um nome (opcional)
            await updateProfile(userCredential.user, { displayName: 'Novo usuário' });
            navigate('/');

            //Adicionar informações adicionais ao Firestore
            const userDocRef = doc(db, 'users', userCredential.user.uid);
            await setDoc(userDocRef, {
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
            })

            onRegister();
        } catch (error) {
            console.error('Erro no registro:'+error);
        }
    };

    return (
        <div>
            <h2>Cdastro</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={handleSenhaChange} />
                </div>
                <button type="button" onClick={handleRegister}>
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
