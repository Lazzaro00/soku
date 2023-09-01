import React from 'react';
import foto from '../assets/img/fuoriCittà.jpg';

class FuoriCittà extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #0b0c0e 0%, #161618 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Fuori Città  - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/4b7ICVdsFZF3atJA6C9ruy?si=f23801e50eef44eb','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.amazon.it/albums/B0CBFS2GKD?do=play&trackAsin=B0CBFSL7C6&ref=dm_sh_0d0wkCkr9a7TLbtIBY1eW2KzP','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/it/album/fuori-citt%C3%A0/1696438504?i=1696438505','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default FuoriCittà;
