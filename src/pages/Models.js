import React, { useEffect } from "react";
import VehicleModels from "../components/VehicleModels";
import Footer from "../components/Footer";

function Models({ store }) {
    useEffect(() => {
        document.title="VEHICLE MODELS | VEHICLES"
    }, [])
    return(
        <div>
            <VehicleModels store={store}/>
            <Footer />
        </div>
    )
}

export default Models;