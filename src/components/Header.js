import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <nav className="nav">
            <Link to="/">
                <div> HikeHub</div>
            </Link>
        </nav>
    )
}

export default Header