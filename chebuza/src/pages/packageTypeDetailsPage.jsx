import React, { useContext, useEffect, useState } from "react";
import PackageTypeDetailCard from "../components/PackageTypeDetailTable";
import { MZcontext } from "../context";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Button, Card, TextField, Typography } from "@mui/material";
import StickyHeadTable from "../components/PackageTypeDetailTable";
import '../App.css'


const PackageTypeDetailsPage = () => {
    const [packagesData, setPackagesData] = useState([])
    const [quantityValue, setQuantityValue] = useState('')
    const { typeID } = useContext(MZcontext)

    const sendGetRequest = async () => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    type_id: typeID,
                }
            });
            setPackagesData(response.data.sort((a, b) => a.OrderLineID - b.OrderLineID));
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    useEffect(() => {
        sendGetRequest()
    }, [])

    const onQuantityChange = (e) => {
        setQuantityValue(e.target.value)
    }

    const onFliterButtonClick = () => {
        const filteredData = packagesData.filter((packageData) => packageData.Quantity === Number(quantityValue))
        setPackagesData(filteredData)
    }


    return (
        <>
            <div className="quantityFilterDiv">
                <TextField placeholder="quantity to filter" onChange={onQuantityChange} value={quantityValue} />
                <Button onClick={onFliterButtonClick} className="filterButton" variant="contained">filter</Button>
            </div>
            {/* {packagesData.map((packageData) => {
                console.log(packageData.OrderLineID)
                return (
                    <Card key={packageData.OrderLineID}>
                        <Typography>{packageData.OrderLineID}</Typography>
                        <Typography>{packageData.Description}</Typography>
                        <Typography>{packageData.Quantity}</Typography>
                        <Typography>{packageData.UnitPrice}</Typography>
                    </Card>
                )
            })} */}
            <StickyHeadTable packageDetailsData={packagesData} />
            {!packagesData && <Typography>details not found</Typography>}
        </>
    )
}

export default PackageTypeDetailsPage;