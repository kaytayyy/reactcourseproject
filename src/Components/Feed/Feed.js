import React from "react";
import "./Feed.css";
import Share from "../Share/share.js";
import Post from "../Post/Post.jsx";

function Feed({ photos }) {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <div key={post1}></div> */}
            </div>
            <Share/>
            {photos.map(photo=>(
            <Post key={photo.id} post={photo}/>
            ))}
        </div>
    )
}

export default Feed;