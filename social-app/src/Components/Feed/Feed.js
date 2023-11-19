import React from "react";
import "./Feed.css";
import Share from "../Share/share.js";
import Post from "../Post/Post.jsx";
import {Posts} from "../DummyData.js"

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper"></div>
            <Share/>
            {Posts.map(p=>(
            <Post key={p.id} post={p}/>
            ))}
        </div>
    )
}

export default Feed;