import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <nav className="nav">
            <Link to="/">
                <div> Hiking App</div>
            </Link>
        </nav>
    )
}

export default Header