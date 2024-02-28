import { Card } from "@mui/material";
import React from "react";
import PackageTypeCard from "../components/PackageTypeCard";
import { PACKAGE_TYPE_ID } from "../constants";
import { MZcontext } from "../context";
import PackageTypeDetailsPage from "./packageTypeDetailsPage";
import '../App.css'
import Header from "../components/Header";

const Home = () => {
    return (
        <>
        <div className="packageCardContainer">
            {PACKAGE_TYPE_ID.map((typeID) => {
                return (
                    <div key={typeID}>
                        <PackageTypeCard typeID={typeID} />
                    </div>
                )
            })}

            {/* <PackageTypeDetailsPage/> */}
        </div>
        </>
    )
}

export default Home;