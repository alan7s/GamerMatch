import React from "react";
import '../../pages/SignUp/styles.css';

function Signup() {
   return (
      <div id="page-signup">
         <div id="page-signup-content" className="container">
            <div className="logo-container">
               <h1>Signup</h1>
               <h2>Encontre seu duo.</h2>
            </div>
            <div className="signup-container">
               <h1>Cadastrar</h1>
               <p>Preencha os campos abaixo para criar sua conta</p>
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
               <button type="submit" className="registerbtn">Cadastrar</button>
            </div>
         </div>
      </div>
   )
}

export default Signup;