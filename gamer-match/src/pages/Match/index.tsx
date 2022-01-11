import React from 'react';

import logoIMG from '../../assets/logoImg2.png';
import play from '../../assets/icons/play.png';
import no from '../../assets/icons/close.png';
import perfilPic from '../../assets/userpic/userpic1.jpg';
import userpic1 from '../../assets/userpic/fakePic.png';
import userpic2 from '../../assets/userpic/userpic2.jpg';
import userpic3 from '../../assets/userpic/userpic3.jpg';
import userpic4 from '../../assets/userpic/userpic4.jpg';
import './styles.css';

function Match() {
    return (
        <div id="page-match">
            <div id="page-match-content" className="container">
                <div className="header">
                    <img src={logoIMG} alt="" />
                </div>
                <div className="card">
                    <img src={userpic1} alt="" />
                    <div id="ball"></div>
                    <div className="buttons-content">
                        <div className="buttons" id="passB">
                            <img src={no} alt="" />
                        </div>
                        <div className="buttons" id="likeB"></div>
                        <div className="buttons" id="perfilB"></div>
                    </div>
                </div>
                <div className=" footer">
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
