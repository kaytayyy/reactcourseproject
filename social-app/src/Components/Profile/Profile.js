import React from "react";
import "./Profile.css"
import TopBar from '../TopBar/TopBar.js';
import Sidebar from '../SideBar/SideBar.jsx';
import Feed from '../Feed/Feed.js';

function Profile() {
    return (
        <div>
        <TopBar/>
        <div className='profile'>
        <Sidebar/>
        <div className='profileRight'>
        <div className='profileRightTop'>
            <div className='profileCover'>
                <img className="profileUserImg" src= "./Photos/Katiepfp.jpg"/>
            </div>
            <div className='profileInfo'>
                <span className="profileInfoDesc">Hi I'm Katie, welcome to my page!</span>
                <h4 className="profileName">Katie Smith</h4>
            </div>
        </div>
        <div className='profileRightBottom'>
            <Feed/>
        </div>
        </div>
    </div>
    </div>
    )
}

export default Profile;