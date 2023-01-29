import React, { useState, useEffect } from "react";
import audi from "../images/audi.png";
import { useFetchMakes } from "../networking/useFetchMakes";

function VehicleMake() {
    

  const {data} = useFetchMakes("https://jsonblob.com/api/1067952306045337600");
  

    

    return(
        <div className="layout">
			{data.length > 0 && (
                <div className="flex">
                    {data.map(vehicle => (
                        <div className="flex__box">
                            <img src={audi} className="image"/>
                            <h3 className="title">{vehicle.make}</h3>
                            <h3 className="title">{vehicle.abbreviation}</h3>
                            <button className="flex__box__button">See models</button>
                        </div>
                    ))}
                </div>
            )}
			
        </div>
    )
}

export default VehicleMake;

