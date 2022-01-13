import React from 'react';
import { useState, useEffect } from 'react';

import ImageGallery from 'react-image-gallery';

import logoIMG from '../../assets/logoImg2.png';
import dots from '../../assets/icons/dots.png';
import no from '../../assets/icons/close.png';

import star from '../../assets/icons/star.png';
import chat from '../../assets/icons/chat.png';
import cards from '../../assets/icons/cards.png';

import menu from '../../assets/icons/menu.png';
import backPerfil from '../../assets/icons/backPerfil.png';

import userpic1 from '../../assets/userpic/fakePic.jpg';

import './styles.css';
import './stylesGallery.css';

function getWidthDimensions() {
    const { innerWidth: width } = window;
    return width;
}

function Match() {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    let width = 0;
    width = getWidthDimensions();
    console.log(width);
    let TelaBool = width > 900 ? true : false;

    return (
        <div id="page-match">
            <div id="page-match-content">
                <div className="header">
                    <a id="backB" href="">
                        <img src={backPerfil} alt="" />
                    </a>
                    <img src={logoIMG} alt="" />
                    <a id="menuB" href="">
                        <img src={menu} alt="" />
                    </a>
                </div>
                <div className="card">
                    <div id="cardShadow"></div>
                    <ImageGallery items={images} showFullscreenButton={false} showNav={TelaBool} showPlayButton={false} showThumbnails={false} />
                    <div className="gallery-content">
                        <a className="bar"></a>
                        <a className="bar"></a>
                        <a className="bar"></a>
                        <a className="bar"></a>
                        <a className="bar"></a>
                    </div>
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
                    <h3>
                        Purutchuda, <span>24</span>
                    </h3>
                    <h4>The Sims 4, Minecraft, CS-GO, Stardew Valley, Candy Crush</h4>
                </div>
                <div className="footer">
                    <div id="ball"></div>
                    <a id="MatchesB" href="">
                        <img src={star} alt="" />
                    </a>
                    <a id="cardB" href="">
                        <img src={cards} alt="" />
                    </a>
                    <a id="chatB" href={process.env.PUBLIC_URL + '/chat'}>
                        <img src={chat} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Match;
