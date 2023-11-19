import React from "react";
import "../Post/Post.css"
import LikeBtn from "./LikeButton";


const api = "https://picsum.photos/200"
function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="src/Photos/KatiePfp.jpg"></img>
                        <span className="postUsername">Katie Smith</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">Look at this!</span>
                    <img src={api} alt="api image" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <button className="likeButton" type="button" background='white'>❤️</button>
                        <span className="postLikeCounter">36</span>
                        {/* <LikeBtn/> */}
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">3 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;