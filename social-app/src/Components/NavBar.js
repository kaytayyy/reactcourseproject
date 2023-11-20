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
            <a href="/movies" onClick={navigate}>
                Home
            </a>
            <a href="/about" onClick={navigate}>
                Profile
            </a>
        </nav>
    );
}

export default NavBar;