import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile.js';
import Login from './Components/login/login.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Posts } from "./Components/DummyData.js";


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

function App() {

const [photos] = useState(Posts)

return (
  <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home photos={photos}/>}/>
        <Route path="/profile" element={<Profile photos={photos}/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
)

}


export default App;

// json-server --watch ./social-app/db.json --port 3500