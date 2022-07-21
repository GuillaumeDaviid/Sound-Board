import React from 'react'
import {useState} from 'react'

export default function Add () {

    const [name, setName] = useState()

    function handleChange(e) {
        return setName(e.target.value)
     }

    return(
        <div>
            <h1>Ajouter un son :</h1>

            <h2>Nom : </h2>
            <input type="text" data-testid="name" onChange={handleChange}/>

            <h2>Télécharger :</h2>
            <input type="file" name="sound"
            accept="audio/mp3, " data-testid="file"></input>

            <button>Ajouter</button>
        </div>
    )
}