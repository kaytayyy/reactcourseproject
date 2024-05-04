import React from 'react';
import TopBar from '../TopBar/TopBar.js';
import Sidebar from '../SideBar/SideBar.jsx';
import Feed from '../Feed/Feed.js';
import Aaron from "../../Photos/AaronPfp.jpg";
import Danny from "../../Photos/DannyPfp.jpg";
import Gunner from "../../Photos/GunnerPfp.jpg";
import Jax from "../../Photos/JaxPfp.JPG";
import Katie from "../../Photos/KatiePfp.jpg";
import Meghan from "../../Photos/MeghanPfp.jpg";
import logo from "../../Photos/logo512.png";

import "./home.css";

function Home(api) {
    const photos = [
        { name: 'Aaron', path: Aaron },
        { name: 'Danny', path: Danny },
        { name: 'Gunner', path: Gunner },
        { name: 'Jax', path: Jax },
        { name: 'Katie', path: Katie },
        { name: 'Meghan', path: Meghan },
        { name: 'logo', path: logo}
    ];

    return (
        <div>
            <TopBar/>
            <div className='homeContainer'>
            <Sidebar/>
            <Feed photos = {photos} />
            </div>
        </div>
    )
}

export default Home;