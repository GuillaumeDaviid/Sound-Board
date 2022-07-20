import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// @ts-ignore
import Header from './components/Header.tsx'
// @ts-ignore
import Home from './components/Home.tsx'
// @ts-ignore
import Add from './components/Add.tsx'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
         <Route path="/add" element={<Add />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
