import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className="navbar">
            <div className="spread-element">
                <Link to="/" className="text-navbar"><h1>Notes App.</h1></Link>
                <p>by Hana Kirana</p>
            </div>
        </div>
    )
}

export default Navbar;