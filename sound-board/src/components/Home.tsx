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
        <button onClick={() => pause(audio)}>Pause</button>
        <button onClick={() => load(audio)}>Stop</button>
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
            {card}

            {/*<button className="Home_btn" onClick={start}>Play</button>*/}
            {/*
            <div className='audio-player'>
            <audio controls src="/greg.mp3" />
            </div>

            <div className='Home_player'>
                <button onClick={pause}>Pause</button>
                <button onClick={load}>Stop</button>
            </div>
    */}
        </div>
    )
}