import React from "react";
import "../Post/Post.css"

const api = "https://picsum.photos/200"
function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft"></div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}

export default Post;