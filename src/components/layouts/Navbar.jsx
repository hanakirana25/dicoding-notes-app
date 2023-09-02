import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className="navbar">
            <div className="spread-element">
                <Link to="/" style={{textDecoration: 'none', color: "#0a0a0a"}}><h1>Notes App.</h1></Link>
                <p>by Hana Kirana</p>
            </div>
        </div>
    )
}

export default Navbar;