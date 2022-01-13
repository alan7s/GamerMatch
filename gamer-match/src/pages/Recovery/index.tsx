import React from 'react';
import './styles.css';
import iconBack from '../../assets/icons/back.png';
import logoIMG from '../../assets/logoImg2.png';

function Recovery() {
    return (
        <div id="page-recovery">
            <div id="page-recovery-content" className="container">
                <img src={logoIMG} alt="logo Gamer match" className="logo-image" />
                <div className="login-container">
                    <h1>Esqueci minha senha</h1>
                    <p>Informe seu email para recuperar sua conta</p>
                    <label>
                        Email:
                        <input type="email" placeholder="Digite seu email" name="email" id="email" required />
                    </label>
                </div>
                <div className="buttons-container">
                    <a href={process.env.PUBLIC_URL + '/'} className="secondaryButton">
                        <img src={iconBack} alt="coração roxo" /> Voltar
                    </a>
                    <a href={process.env.PUBLIC_URL + '/recovery/emailCode'} className="signUp">
                        Enviar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Recovery;

/*
<div className="recovery-container">

<label>
   Email:
   <input type="email" placeholder="Digite seu email" name="email" id="email" required />
</label>
<button type="submit" value="recovery" className="btnRecovery">Recuperar senha</button>
</div>
</div>
</div>

*/
