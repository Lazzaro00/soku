import React from 'react';
import foto from '../assets/img/sotto_cassa.jpg';

class SottoCassa extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #ca0406 0%, #171719 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Sotto Cassa  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/1TDvpgHVkr89FNkRiR4O84?si=3ace5aef9ffc45e9','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://amazon.it/music/player/albums/B0B148ZTV9?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_iCGQwBzxOH3xIeqtJw2sY0F1u&trackAsin=B0B14F5JNJ','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/us/album/sotto-cassa/1623627715?i=1623627716','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://youtu.be/4JaSMLVmeMw','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default SottoCassa;
