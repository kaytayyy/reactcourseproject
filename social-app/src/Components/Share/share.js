import React from "react";
import "../Share/Share.css"


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
        url: document.getElementsByClassName('shareInput').value
    })
})
.then(res => res.json());
.then(data => {console.log(document.getElementsByClassName('shareInput').value)})

// function postData() {
//     postFetch()
//     .then(data => {
//         console.log('succsess:', data);
//     })
//     .catch(error => {
//         console.error('error:', error);
//     })
// }


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
                    <button onClick={ () => postFetch() } className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )

}

export default Share;