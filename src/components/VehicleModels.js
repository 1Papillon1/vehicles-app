import React, { useState, useEffect } from "react";
import escalade from "../images/escalade.jpg";
import { useFetchModels } from "../networking/useFetchModels";

function VehicleModels() {
    
    const {data} = useFetchModels("https://jsonblob.com/api/1067952306045337600");
    
console.log(data);


    return(
        <div className="layout">
			{data.length > 0 && (
                <div className="flex flex--secondary">
                    {data.map(vehicle => (
                        <div className="flex__box flex__box--secondary">
                            <img src={escalade} className="image image--secondary" />
                            <h3 className="title">{vehicle.model}</h3>

                        </div>
                    ))}
                </div>
            )}
			
        </div>
    )
}

export default VehicleModels;

