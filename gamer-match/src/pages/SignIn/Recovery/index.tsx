import React from "react";
import './styles.css';

function Recovery() {
   return (
      <div id="page-recovery">
         <div id="page-recovery-content" className="container">
            <div className="logo-container">
            </div>
            <div className="recovery-container">
               <h1>Esqueci minha senha</h1>
               <p>Informe seu email para recuperar sua conta</p>
               <label>
                  Email:
                  <input type="email" placeholder="Digite seu email" name="email" id="email" required />
               </label>
               <button type="submit" value="recovery" className="btnRecovery">Recuperar senha</button>
            </div>
         </div>
      </div>
   )
}

export default Recovery;