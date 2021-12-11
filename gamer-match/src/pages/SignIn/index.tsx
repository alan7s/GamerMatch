import React from "react";
import './styles.css';

function Signin() {
   return (
      <div id="page-signin">
         <div id="page-signin-content" className="container">
            <div className="logo-container">
               <h1>SignIn</h1>
               <h2>Encontre seu duo.</h2>
            </div>
            <div className="signin-container">
               <h1>Entrar</h1>
               <p>Preencha os campos abaixo para logar</p>
               <label>
                  Email:
                  <input type="email" placeholder="Digite seu email" name="email" id="email" required />
               </label>
               <label>
                  Senha:
                  <input type="password" placeholder="Digite sua senha" name="password" id="password" required />
               </label>
               <button type="submit" value="login" className="btnSignIn">Entrar</button>
            </div>
         </div>
      </div>
   )
}

export default Signin;