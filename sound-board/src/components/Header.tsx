import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export default function Header () {
    return(
        <div>
            <h1>SOUND BOARD</h1>
            <Link to="/">Home</Link>
        </div>
    )
}