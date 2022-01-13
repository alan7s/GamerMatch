import React from 'react';

import logoIMG from '../../assets/logoImg2.png';
import iconPurpleHeart from '../../assets/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>Gamer Match</h1>
                    <h2>Encontre seu duo.</h2>
                </div>
                <img src={logoIMG} alt="logo Gamer match" className="logo-image" />
                <div className="login-container">
                    <label>
                        Email:
                        <input type="email" placeholder="Digite seu email" name="email" id="email" required />
                    </label>
                    <label>
                        Senha:
                        <input type="password" placeholder="Digite sua senha" name="password" id="password" required />
                    </label>
                </div>
                <div className="buttons-container">
                    <div>
                        <a href={process.env.PUBLIC_URL + '/match'} className="signIn">
                            Logar
                        </a>
                        <a href={process.env.PUBLIC_URL + '/recovery'} className="secondaryButton">
                            Esqueci minha senha
                        </a>
                    </div>
                    <a href={process.env.PUBLIC_URL + '/register'} className="signUp">
                        Cadastrar
                    </a>
                </div>
                <span className="total-connections">
                    total de 200 conexões já realizadas <img src={iconPurpleHeart} alt="coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
