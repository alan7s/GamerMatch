import React, { ChangeEventHandler, useRef, useEffect } from 'react';
import './styles.css';
import iconBack from '../../../assets/icons/back.png';
import logoIMG from '../../../assets/logoImg2.png';

function EmailCode() {
    const inputC1 = React.createRef();
    console.log(inputC1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regexp = /^[0-9\b]+$/;
        const input = e.target.value;
        console.log(input);
        if (input === '' || !regexp.test(input)) {
            e.target.value = '';
        } else {
        }
        console.log(e.target.id);
    };
    return (
        <div id="page-recovery">
            <div id="page-recovery-content" className="container">
                <img src={logoIMG} alt="logo Gamer match" className="logo-image" />
                <div className="login-container">
                    <h1>Esqueci minha senha</h1>
                    <p>Informe o código recebido no email</p>
                    <label>
                        Code:
                        <div id="labelCode">
                            <input onChange={handleChange} maxLength={1} type="tel" name="code1" required />
                            <input onChange={handleChange} maxLength={1} type="tel" name="code2" required />
                            <input onChange={handleChange} maxLength={1} type="tel" name="code3" required />
                            <input onChange={handleChange} maxLength={1} type="tel" name="code4" required />
                            <input onChange={handleChange} maxLength={1} type="tel" name="code5" required />
                            <input onChange={handleChange} maxLength={1} type="tel" name="code6" required />
                        </div>
                    </label>
                </div>
                <div className="buttons-container">
                    <a href={process.env.PUBLIC_URL + '/recovery'} className="secondaryButton">
                        <img src={iconBack} alt="coração roxo" /> Voltar
                    </a>
                    <a href={process.env.PUBLIC_URL + '/recovery/newPassword'} className="signUp">
                        Enviar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EmailCode;
