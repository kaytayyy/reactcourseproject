import React from "react";
import "./Feed.css";
import Share from "../Share/share.js";
import Post from "../Post/Post.jsx";

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper"></div>
            <Share/>
            <Post/>
        </div>
    )
}

export default Feed;