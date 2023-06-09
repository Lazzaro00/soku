import React from 'react';
import foto from '../assets/img/apple.jpg';

class Apple extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #d5bb06 0%, #171719 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Apple  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/0PrJaXzNau6S3AP7prD5Ni?si=112c5847c36f4499','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://amazon.it/music/player/albums/B0BWVHLS3W?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_XJgVSAj2LF8y1EcK6PztM8ABd&trackAsin=B0BWVG7K7C','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/us/album/apple/1674360540?i=1674360541','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://youtu.be/eRXEDxCf2pM','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default Apple;
