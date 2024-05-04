import React from "react";
import "./CloseFriends.css"
// import {Users} from "../DummyData.js"

function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={user.profilePicture} alt="pfp"></img>
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend;