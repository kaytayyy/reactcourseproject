import React from "react";
import "./SideBar.css";
import {Users} from "../DummyData.js";
import CloseFriend from "../CloseFriends/CloseFriends.jsx";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Explore</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Post</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Notifications</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Settings</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <li className="friendFavorites">Favorites:</li>
                <ul className="sidebarFriendList">
                    {Users.map(u =>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;