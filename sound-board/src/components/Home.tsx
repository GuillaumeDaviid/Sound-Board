export default function Home () {
    let audio = new Audio("/greg.mp3")

      const start = () => {
        audio.play();
      };
    
    return(
        <div>
            <h2>Vos sons : </h2>

            <button onClick={start}>Play</button>

            <audio controls src="/greg.mp3" />

        </div>
    )
}