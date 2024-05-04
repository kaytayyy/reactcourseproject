import React, { useState } from "react";
import "./Share.css"


function Share() {
    const [inputValue, setInputValue] = useState("");
    const [postData, setPostData] = useState(null);

function postFetch() {
    let url = 'http://localhost:3500/photos'
fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        url: inputValue,
    })
})
.then(res => res.json())
.then(data => {
    console.log(inputValue, data);
    console.log('success:', data);
    setPostData(data);
})
.catch(error => {
    console.error('error:', error);
})
}

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img className="shareProfileImg" src="src/Photos/JaxPfp.JPG" alt="Profile"></img>
                <input placeholder="What's going on in that noggin of yours?" className="shareInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
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
                    <button onClick={ () => postFetch() } className="shareButton">Share</button>
                    {postData && ( 
                    <p>{postData.url}</p>
                        )}   
                </div>
            </div>
        </div>
    )

}

export default Share;