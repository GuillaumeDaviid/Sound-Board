import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.scss'


export default function Header () {
    return(
        <div className='Header'>
            <h1 className='Header_title'>SOUND BOARD</h1>
            <div className='Header_nav'>
                <Link to="/" className='Header_nav-link'>Home</Link>
                <Link to="/add" className='Header_nav-link'>Ajouter</Link>
            </div>
        </div>
    )
}