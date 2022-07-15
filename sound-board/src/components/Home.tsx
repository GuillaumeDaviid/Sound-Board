import React from 'react'
// @ts-ignore
import {sound} from '../data/songs.ts'
import '../styles/Home.scss'

export default function Home () {
    //let audio = new Audio("/greg.mp3")

   const card = sound.map((data) => {
    var audio = new Audio(data.src);
    return(
      <div>
    <button className="Home_btn" onClick={() => start(audio)}>Play</button>
    <div className='Home_player'>
        <button onClick={() => pause(audio)} className="Home_control">Pause</button>
        <button onClick={() => load(audio)} className="Home_control">Stop</button>
    </div>
    </div>
    
    )
   }
   )

    console.log(sound)
  

      const start = (audio) => {
        audio.play()
      };

      const pause = (audio) => {
        audio.pause();
      }

      const load = (audio) => {
        audio.load()
      }
    
    return(
        <div className="Home">
            <h2>Vos sons : </h2>
            <div className='Home_card'>
            {card}
            </div>
        </div>
    )
}