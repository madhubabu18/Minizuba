import { Card } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MZcontext } from "../context";
import '../App.css'


const PackageTypeCard = ({ typeID }) => {
    const { setTypeID } = useContext(MZcontext)
    const onCardClick = () => {
        setTypeID(typeID)
        console.log('------>', typeID)
    }
    return (
        <>
            <Link to={'/packagetype'} >
                <Card className="packageTypeCard" onClick={onCardClick}>Package type {typeID}</Card>
            </Link>
        </>
    )
}

export default PackageTypeCard;