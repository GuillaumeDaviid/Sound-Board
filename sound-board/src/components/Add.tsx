import React from 'react'
import {useState} from 'react'
import '../styles/Add.scss'

export default function Add () {

    const [name, setName] = useState()

    function handleChange(e) {
        return setName(e.target.value)
     }

    function submit() {
        fetch('/add' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((result) => result.json())
        .then((info) => { console.log(info); })
    }

    return(
        <div className='Add'>
            <h1 className='Add_title'>Ajouter un son :</h1>
            <form>

            <h2 className='Add_subTitle'>Nom : </h2>
            <input type="text" data-testid="name" onChange={handleChange}/>
        <div className='Add_download'>
            <h2>Télécharger :</h2>
            <input type="file" name="sound"
            accept="audio/mp3, " data-testid="file"></input>
        </div>
            <button type="submit" className='Add_button' onSubmit={submit}>Ajouter</button>
            </form>
        </div>
        
    )
}