import React from 'react';
import TopBar from '../TopBar/TopBar.js';
import Sidebar from '../SideBar/SideBar.jsx';
import Feed from '../Feed/Feed.js';
import "./home.css";

function Home(api) {
    return (
        <div>
            <TopBar/>
            <div className='homeContainer'>
            <Sidebar/>
            <Feed/>
            </div>
        </div>
    )
}

export default Home;