import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Typography className="headerTitle">MINIZUBA</Typography>
            <Link to='/' className="homeText">Home</Link>
        </div>
    )
}

export default Header;