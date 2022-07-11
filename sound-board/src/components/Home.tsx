import '../styles/Home.scss'

export default function Home () {
    let audio = new Audio("/greg.mp3")

    console.log(audio)

      const start = () => {
        audio.play();
      };

      const pause = () => {
        audio.pause();
      }

      const load = () => {
        audio.load();
      }
    
    return(
        <div className="Home">
            <h2>Vos sons : </h2>

            <button className="Home_btn" onClick={start}>Play</button>
            <button onClick={pause}>Pause</button>
            <button onClick={load}>reset</button>

            <audio controls src="/greg.mp3" />

        </div>
    )
}