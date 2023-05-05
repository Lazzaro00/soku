import React from 'react';
import foto from '../assets/img/DimmiPerche.jpg';

class Song extends React.Component {
    render() 
    return(
        <div className="Song">
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Dimmi Perché - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/album/38jCfZDkZM0RnTZPbsbZH5','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.amazon.it/albums/B0BWVHLS3W?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_yjobBsAuVTYLiLgXvxkb0J0Tb&trackAsin=B0BWVG7K7C','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/us/album/apple/1674360540?i=1674360541','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://https://youtu.be/3O0NhRiNOCc','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default Song;
