import React from 'react';
import foto from '../assets/img/antartide.jpg';

class Antartide extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #6fa4cf 0%, #171719 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Antartide  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/3ePxJMvzE1lcdzbY57Ot6a?si=d8c1af5f5c494507','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://amazon.it/music/player/albums/B09WKMDDYM?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_jvc8Q1tx5MeIj36POnI9SwZgA&trackAsin=B09WKPTVJ9','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/us/album/antartide/1616197579?i=1616197580','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://youtu.be/AeCTp1SaDNI','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default Antartide;
