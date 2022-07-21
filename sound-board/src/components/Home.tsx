import React from 'react'
import '../styles/Home.scss'
import data from '../data/data.json'

export default function Home () {
    //let audio = new Audio("/greg.mp3")

    console.log(data)

   const card = data.map((data) => {
    var audio = new Audio(data.file);
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