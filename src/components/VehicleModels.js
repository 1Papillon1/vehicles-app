import React, { useState, useEffect } from "react";
import escalade from "../images/escalade.jpg";
import { useLocation, useHistory } from "react-router-dom";
import { toJS } from "mobx";
import audi from "../images/audi.png";


function VehicleModels({ store }) {

    const newVehicleModels = toJS(store.vehicleModels);

    const location = useLocation();
    const { vehicleMakeId } = location.state;

    let history = useHistory();
    function handleClick() {
        history.push("/vehicles/makes");
    }
    

    




    return(
        <div className="layout">
            <button className="button" type="button" onClick={handleClick}>
                Go back!
            </button>
            {newVehicleModels.length > 0 && (
                <div className="flex flex--secondary">
                    {newVehicleModels.map(newModel => (
                        <>
                        {newModel.makeId == vehicleMakeId && (
                        <div className="flex__box">
                            <img src={audi} className="image"/>
                            <h3 className="title">{newModel.model}</h3>
                        </div>
                        )}
                        </> 
                    ))}


                </div>
            )}
			
        </div>
    )
}

export default VehicleModels;

/*
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

*/