import { useState, useEffect } from 'react';
// @ts-ignore
import {songs} from '../song/songs.ts'
import '../styles/Home.scss'

export default function Home () {
    const [playing, setPlaying] = useState(false);
    let audio = new Audio("/greg.mp3")

    console.log(audio.paused)
  

      const start = () => {
        audio.play()
      };

      const pause = () => {
        audio.pause();
      }

      const load = () => {
        audio.load()
      }
    
    return(
        <div className="Home">
            <h2>Vos sons : </h2>

            <button className="Home_btn" onClick={start}>Play</button>
            

            <audio controls src="/greg.mp3" />

            <div className='Home_player'>
                <button onClick={pause}>Pause</button>
                <button onClick={load}>Stop</button>
            </div>

        </div>
    )
}