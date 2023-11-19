import React from "react";
import "./SideBar.css";

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
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Meghan Glinski</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Aaron Woodman</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Jasmine White</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Abby Guffey</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Danny Megard</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Zack Fisher</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Anna Smith</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Griffin Smith</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Bella White</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Jax Smith</span>
                    </li>
                    <li className="sidebarFriend">
                        <span className="sidebarFriendName">Gunner Smith</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;