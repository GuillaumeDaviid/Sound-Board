import React from 'react'
import {useState} from 'react'
import '../styles/Add.scss'

export default function Add () {

    const [name, setName] = useState<String>()
    const [fileName, setFileName] = useState<String>()

    function handleChange(e:any) {
        return setName(e.target.value)
    }

    function handleChangeFile(e:any) {
        return setFileName(e.target.value)
    }

    const handleSubmit = e => {
        if (fileName && name) {
            fetch('http://localhost:3001/add' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"id": "4", "name" : name, "file" : `/${fileName.substr(12)}`})
        })
        .then((result) => result.json())
        .then((info) => { console.log(info); })
        }
      };
    



    return(
        <div className='Add'>
            <h1 className='Add_title'>Ajouter un son :</h1>
            <form onSubmit={handleSubmit}>

            <h2 className='Add_subTitle'>Nom : </h2>
            <input type="text" data-testid="name" onChange={handleChange}/>
        <div className='Add_download'>
            <h2>Télécharger :</h2>
            <input type="file" name="sound"
            accept="audio/mp3, " data-testid="file" onChange={handleChangeFile}></input>
        </div>
            <button type="submit" className='Add_button' >Ajouter</button>
            </form>
        </div>
        
    )
}