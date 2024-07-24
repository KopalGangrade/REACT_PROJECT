import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Recommendation from './components/Recommendation';
import Podcasts from './components/Podcasts';
import './App.css'

function App() {
 
  return (
    <>
      <h1>useContext</h1>

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/podcaste" element={<Podcasts/>}></Route>
          <Route path="/recommendation" element={<Recommendation/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
