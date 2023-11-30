import React from 'react';
import foto from '../assets/img/inPara.png';

class Antartide extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #9e2326 0%, #171719 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> In Para  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/intl-it/track/6vKggrB34Z2b62NVXbqTlZ?si=ecdbcfcd2dbe4178','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.amazon.it/albums/B0CP2TW4H2?do=play&trackAsin=B0CP2VTFYW&ref=dm_sh_BBOLySg1fK09RFUneTmKsQWfZ','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/it/album/in-para/1718602560?i=1718602561','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default Antartide;
