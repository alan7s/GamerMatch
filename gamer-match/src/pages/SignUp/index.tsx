import React from 'react';
import '../../pages/SignUp/styles.css';
import iconBack from '../../assets/icons/back.png';

function Signup() {
    return (
        <div id="page-signup">
            <div id="page-signup-content" className="container">
                <div className="singup-container">
                    <h1>Cadastrar</h1>
                    <label>
                        Nome de usuário:
                        <input type="text" name="name" id="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" id="email" required />
                    </label>
                    <label>
                        Senha:
                        <input type="password" placeholder="Digite sua senha" name="password" id="password" required />
                    </label>
                    <label>
                        Repita a senha:
                        <input type="password" placeholder="Repita sua senha" name="password-repreat" id="password-repreat" required />
                    </label>
                    <div className="buttons-container">
                        <a href="/" className="secondaryButton">
                            <img src={iconBack} alt="coração roxo" /> Voltar
                        </a>
                        <a href="/" className="signUp">
                            Cadastrar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
