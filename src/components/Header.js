import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
    return(
        <nav className="nav">
            <Link to="/">
                <div> HikeHub</div>
            </Link>
            <h1>Scale New Heights, Let HikeHub be Your Guide! </h1>
        </nav>
    )
}

export default Header