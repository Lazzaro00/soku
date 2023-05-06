import React from 'react';
import foto from '../assets/img/bmw.jpg';

class Bmw extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, rgba(6,71,131,1) 0%, rgba(23,23,25,1) 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Bmw  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/01wudoT7GNx7JIbXxKyTI5?si=b63f2ecc89ba4d77','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://amazon.it/music/player/albums/B0BRWGQZ8P?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_AYePhFiBYsw8naNrxGfTTOFNY&trackAsin=B0BRWFNSKZ','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/us/album/bmw/1664225596?i=1664225597','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://youtu.be/4EdVXLpjNoo','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default Bmw;
