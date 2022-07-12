import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// @ts-ignore
import Header from './components/Header.tsx'
// @ts-ignore
import Home from './components/Home.tsx'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
