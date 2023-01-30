import React, { useState, useEffect } from "react";
import escalade from "../images/escalade.jpg";
import { useLocation, useHistory } from "react-router-dom";
import { useFetchModels } from "../networking/useFetchModels";

function VehicleModels() {
    let history = useHistory();
    function handleClick() {
        history.push("/vehicles/makes");
    }

    const location = useLocation();
    const { vehicleMake } = location.state;
    console.log(vehicleMake);

    const {data, loading} = useFetchModels("https://jsonblob.com/api/1067952306045337600");

    
    



    return(
        <div className="layout">
            <button className="button" type="button" onClick={handleClick}>
                Go back!
            </button>
            {loading && 
            <div className="flex">
                <h3 className="title">Loading...</h3>
                
            </div>}
			{vehicleMake && data.length > 0 && (
                <div className="flex flex--secondary">
                    {data.map(vehicle => 
                    
                    { if (vehicle.makeId === vehicleMake)
                        return (
                        <div className="flex__box flex__box--secondary">
                            <img src={escalade} className="image image--secondary" />
                            <h3 className="title">{vehicle.model}</h3>
                            
                        </div>
                        )
})}

                </div>
            )}
			
        </div>
    )
}

export default VehicleModels;

