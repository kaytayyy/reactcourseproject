import React from "react";


function NavBar() {
    function navigate(e) {
        // don't make a GET request
        e.preventDefault();
        // use pushState to navigate using the href attribute of the <a> tag
        window.history.pushState(null, "", e.target.href);
    }

    return (
        <nav>
            <a href="/home" onClick={navigate}>
                Home
            </a>
            <a href="/profile" onClick={navigate}>
                Profile
            </a>
            <a href="/login" onClick={navigate}>
                Log In
            </a>
        </nav>
    );
}

export default NavBar;