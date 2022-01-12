import React from 'react';

import logoIMG from '../../assets/logoImg2.png';
import perfilPic from '../../assets/userpic/userpic1.jpg';
import userpic1 from '../../assets/userpic/fakePic.png';
import userpic2 from '../../assets/userpic/userpic2.jpg';
import userpic3 from '../../assets/userpic/userpic3.jpg';
import userpic4 from '../../assets/userpic/userpic4.jpg';
import close from '../../assets/icons/closecinza.png'
import './styles.css';

function ChatBox() {
    function showMsg() {
        let msgbox = document.querySelector('#msgbox');
        let chatbox = document.querySelector('#chatbox');

        if (msgbox?.classList.contains('show')) {
            msgbox?.classList.remove('show');
            msgbox?.classList.add('hide');
            chatbox?.classList.remove('hide');
            chatbox?.classList.add('show');
        } else {
            msgbox?.classList.remove('hide');
            msgbox?.classList.add('show');
            chatbox?.classList.remove('show');
            chatbox?.classList.add('hide');
        }
    }
    return (
        <div id="page-chat">
            <div id="page-chat-content">
                <div className="header">
                    <img src={logoIMG} alt="" />
                </div>
                <div className="card">
                    <div className="show" id="msgbox">
                        <div className="chat-title">Mensagens</div>
                        <div className="messages" id="messages">
                            <div className="message" id="message" onClick={showMsg}><img src={userpic1} alt="" /><span>Fulano</span></div>
                            <div className="message" id="message" onClick={showMsg}><img src={userpic2} alt="" /><span>Ciclano</span></div>
                            <div className="message" id="message" onClick={showMsg}><img src={userpic3} alt="" /><span>Beltrano</span></div>
                        </div>
                    </div>
                    <div className="chatbox hide" id="chatbox">
                        <div className="chatbox-title">
                            <div className="chatbox-title-left">
                                <img id="chatbox-user-avatar" src={userpic1} alt="" />
                                <span id="chatbox-user-name">Fulano</span>
                            </div>
                            <div className="chatbox-title-right">
                                <img id="chatbox-close" src={close} onClick={showMsg} />
                            </div>
                        </div>
                        <div className="message-container">
                            <div id="message-container">
                                <div className="message-right">
                                    <div className="message-content message-content-right">
                                        <p>Olá Fulano, como vai a família ? E o trem tu pegou? Não sei se poderei jogar.</p>
                                    </div>
                                    <div className="message-avatar">
                                        <img src={userpic4} />
                                    </div>
                                </div>
                                <div className='message-left'>
                                    <div className="message-left">
                                        <div className="message-avatar">
                                            <img src={userpic1} />
                                        </div>
                                        <div className="message-content message-content-left">
                                            <p>Peguei sim, tranquilo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="message-right">
                                    <div className="message-content message-content-right">
                                        <p>Nice!</p>
                                    </div>
                                    <div className="message-avatar">
                                        <img src={userpic4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatbox-input">
                            <input placeholder="Digitar..." id="message-input" />
                        </div>
                    </div>
                </div>
                {/*<div className="footer">
                    <div id="ball"></div>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
    </div>*/}
            </div>
        </div>
    );
}

export default ChatBox;