import React, { useEffect } from "react";
import VehicleMake from "../components/VehicleMake";
import Footer from "../components/Footer";

function Vehicles() {

    useEffect(() => {
        document.title="VEHICLE MAKES | VEHICLES"
    }, [])

    return(
        <div>
            <VehicleMake />
            <Footer />
        </div>
    )
}

export default Vehicles;