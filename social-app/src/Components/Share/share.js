import React from "react";
import "../Share/Share.css"

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img className="shareProfileImg" src="src/Photos/JaxPfp.JPG"></img>
                <input placeholder="What's going on in that noggin of yours?" className="shareInput"></input>
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="shareOptionsText">Photo</span>
                        </div>
                        <div className="shareOption">
                            <span className="shareOptionsText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <span className="shareOptionsText">Location</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;