import React from "react";
import './TopBar.css';


const logo = 'public/logo512.png';
function TopBar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">ReactRipple</span>
                <img src={logo} alt="React Logo"></img>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <input placeholder="Search" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Likes</span>
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Profile</span>
                </div>
                
            </div>
        </div>
    )
}

export default TopBar;