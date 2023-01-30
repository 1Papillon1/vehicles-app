import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    useParams
  } from "react-router-dom";
import audi from "../images/audi.png";
import { useFetchMakes } from "../networking/useFetchMakes";

function VehicleMake() {
    

  const {data, loading} = useFetchMakes("https://jsonblob.com/api/1067952306045337600");
  
  
    

    return(
        <div className="layout">
            {loading && 
            <div className="flex">
                <h3 className="title">Loading...</h3>
                
            </div>}
			{data.length > 0 && (
                <div className="flex">
                    {data.map(vehicle => (
                        <div className="flex__box">
                            <img src={audi} className="image"/>
                            <h3 className="title">{vehicle.make}</h3>
                            <h3 className="title">{vehicle.abbreviation}</h3>
                            <Link className="flex__box__button" to={{pathname: "/vehicles/models", state:{vehicleMake:vehicle.id}}}>
                                <button className="flex__box__button" onClick={() => console.log(vehicle.id)}>
                                    See models
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
			
        </div>
    )
}

export default VehicleMake;

