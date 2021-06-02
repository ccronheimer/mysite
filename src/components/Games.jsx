import React from 'react'
import appstoreicon from '../assets/appstoreicon.svg';
import susicon from '../assets/susicon.svg';
import playstoreicon from '../assets/playstoreicon.png';
import styled from "styled-components";

const SusIcon = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    padding-top: 100px;
`;

const DownloadiOSIcon = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    transform: scale(1.5); 

`;
const DownloadAndroidIcon = styled.div`
    display: flex;
    justify-content: center;
    transform: scale(0.32);
    
`;
const Games = () => {
    return (

        <div>
        <SusIcon> 
                <img src={susicon} alt='susicon'/>
            </SusIcon>
            <DownloadiOSIcon>
                <a href="https://apps.apple.com/us/app/sus-adventure-2/id1564807026">
                <img src={appstoreicon} alt='appstoreicon'/>
                </a>
            </DownloadiOSIcon>

            <DownloadAndroidIcon>
                <a href="https://play.google.com/store/apps/details?id=com.cameroncronheimer.susadventure">
                <img src={playstoreicon} alt='playstoreicon'/>
                </a>
            </DownloadAndroidIcon>
      
        </div>
    )
}

export default Games
