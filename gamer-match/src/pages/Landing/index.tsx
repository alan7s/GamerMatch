import React from "react";

import logoIMG from "../../assets/logoImg2.png"
import iconPurpleHeart from "../../assets/icons/purple-heart.svg"

import "./styles.css"

function Landing() {
   return (
      <div id="page-landing">
         <div id="page-landing-content" className="container">
            <div className="logo-container">
               <h1>Gamer Match</h1>
               <h2>Encontre seu duo.</h2>
            </div>
            <img src={logoIMG} alt="logo Gamer match" className="logo-image" />
            <div className="buttons-container">
               <a href="/login" className="signIn">Logar</a>
               <a href="/register" className="signUp">Cadastrar</a>
            </div>
            <span className="total-connections">total de 200 conexões já realizadas <img src={iconPurpleHeart} alt="coração roxo" />
            </span>
         </div>
      </div>
   )
}

export default Landing;