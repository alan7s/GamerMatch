import React from "react";
import './styles.css';

function Signin() {
   return (
      <div id="page-signin">
         <div id="page-signin-content" className="container">
            <div className="logo-container">
            </div>
            <div className="signin-container">
               <h1>Entrar</h1>
               <label>
                  Email:
                  <input type="email" name="email" id="email" required />
               </label>
               <label>
                  Senha:
                  <input type="password" placeholder="Digite sua senha" name="password" id="password" required />
               </label>
               <input type="submit" value="Entrar" />
            </div>
         </div>
      </div>
   )
}

export default Signin;