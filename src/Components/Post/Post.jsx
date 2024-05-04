import React from "react";
import "./Post.css"
// import LikeBtn from "./LikeButton.js";
import Users from "../DummyData.js";
import {useState} from "react"


// const api = "https://picsum.photos/200"
// const apiSpecific = api+Math.random()+"/200"
function Post({post}) {
    const [likes, setLike] = useState(post.likes)
    const [isLiked, setIsLiked] =useState(false)

    const likeHandler = () => {
        setLike(isLiked ? likes - 1 : likes + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {Users.filter(u => u.id === post.userId).length > 0 && (
                            <>
                            <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilepic} alt="User Profile"></img>
                            <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                          </>  
                        )}
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} className="postImg" alt="Post"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <button onClick={likeHandler} className="likeButton" type="button" background='white'>❤️</button>
                        <span className="postLikeCounter">{likes} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;