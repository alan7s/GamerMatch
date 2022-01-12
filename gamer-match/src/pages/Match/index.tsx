import React from 'react';

import logoIMG from '../../assets/logoImg2.png';
import dots from '../../assets/icons/dots.png';
import no from '../../assets/icons/close.png';
import userpic1 from '../../assets/userpic/fakePic.png';
import './styles.css';

function Match() {
    return (
        <div id="page-match">
            <div id="page-match-content">
                <div className="header">
                    <img src={logoIMG} alt="" />
                </div>
                <div className="card">
                    <div id="cardShadow"></div>
                    <img id="cardPic" src={userpic1} alt="" />
                    <div className="buttons-content">
                        <div className="buttons" id="passB">
                            <img src={no} alt="" />
                        </div>
                        <div className="buttons" id="likeB">
                            I'm Game!
                        </div>
                        <div className="buttons" id="perfilB">
                            <img src={dots} alt="" />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h3>Purutchuda, 24</h3>
                </div>
                <div className="footer">
                    <div id="ball"></div>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
        </div>
    );
}

export default Match;

/*<div id="page-match">
            <div id="page-match-content" className="container">
                <div className="logo-container">
                    <h1>Gamer Match</h1>
                    <h2>Encontre seu duo.</h2>
                </div>
                <div className="match-container">
                    <ul>
                        <li>
                            <img src={userpic1} alt="" />
                            <footer>
                                <strong>Fulanos</strong>
                                <p>Descrição de Fulano</p>
                            </footer>
                            <div className="buttons">
                                <button type="button">
                                    <img src={play} />
                                </button>
                                <button type="button">
                                    <img src={no} />
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={userpic2} alt="" />
                            <footer>
                                <strong>Fulano</strong>
                                <p>Descrição de Fulano</p>
                            </footer>
                            <div className="buttons">
                                <button type="button">
                                    <img src={play} />
                                </button>
                                <button type="button">
                                    <img src={no} />
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={userpic3} alt="" />
                            <footer>
                                <strong>Fulano</strong>
                                <p>Descrição de Fulano</p>
                            </footer>
                            <div className="buttons">
                                <button type="button">
                                    <img src={play} />
                                </button>
                                <button type="button">
                                    <img src={no} />
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={userpic4} alt="" />
                            <footer>
                                <strong>Fulano</strong>
                                <p>Descrição de Fulano</p>
                            </footer>
                            <div className="buttons">
                                <button type="button">
                                    <img src={play} />
                                </button>
                                <button type="button">
                                    <img src={no} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
*/
