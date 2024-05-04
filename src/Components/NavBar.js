import React from "react";


function NavBar() {
    function navigate(e) {
        e.preventDefault();
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