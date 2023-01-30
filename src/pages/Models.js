import React, { useEffect } from "react";
import VehicleModels from "../components/VehicleModels";
import Footer from "../components/Footer";

function Models() {
    useEffect(() => {
        document.title="VEHICLE MODELS | VEHICLES"
    }, [])
    return(
        <div>
            <VehicleModels />
            <Footer />
        </div>
    )
}

export default Models;