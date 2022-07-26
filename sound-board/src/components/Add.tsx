import React from 'react'
import {useState} from 'react'
import '../styles/Add.scss'

export default function Add () {

    const [name, setName] = useState()

    function handleChange(e) {
        return setName(e.target.value)
     }

    return(
        <div className='Add'>
            <h1 className='Add_title'>Ajouter un son :</h1>

            <h2 className='Add_subTitle'>Nom : </h2>
            <input type="text" data-testid="name" onChange={handleChange}/>
        <div className='Add_download'>
            <h2>Télécharger :</h2>
            <input type="file" name="sound"
            accept="audio/mp3, " data-testid="file"></input>
        </div>
            <button className='Add_button'>Ajouter</button>
        </div>
    )
}