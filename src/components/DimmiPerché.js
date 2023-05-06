import React from 'react';
import foto from '../assets/img/DimmiPerché.jpg';

class DimmiPerché extends React.Component {
    render() {
    return(
        <div className="Song" style={{ background: 'linear-gradient(180deg, #C53D8D 0%, #171719 100%)' }}>
            
            <header className="Song-header">
            <img src={foto} className="Song-Link"/>
            <h1> Dimmi Perché - Soku </h1>
        <p className='Pulsanti'>
            <p>
            <button className='ButtonSong' onClick={() => window.open('https://open.spotify.com/track/64nHwVS0vED39jf5uB68Vn?si=cKxtY9lhTT-yW52Oa_tEXg','_blank')}>ASCOLTA | Spotify</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.amazon.it/albums/B0C2W5LVW8?do=play&trackAsin=B0C2W1CWW6&ref=dm_sh_bQCRUEX2Bpas0KCz1lFw5IYx1','_blank')}>ASCOLTA | Amazoon Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://music.apple.com/it/album/dimmi-perch%C3%A8/1683251512?i=1683251513','_blank')}>ASCOLTA | Apple Music</button>
            <button className='ButtonSong' onClick={() => window.open('https://youtu.be/3O0NhRiNOCc','_blank')}>ASCOLTA | Youtube</button>
            </p>
        </p>
      </header>
    </div>
    );
}
}


export default DimmiPerché;
