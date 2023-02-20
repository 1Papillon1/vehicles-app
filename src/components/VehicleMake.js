import { QuerySnapshot } from "@firebase/firestore";
import { get } from "mobx";
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    useParams
  } from "react-router-dom";
import audi from "../images/audi.png";
import { toJS } from "mobx";
import nextId from "react-id-generator";







function VehicleMake({ store }) {
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const { vehicleMakes } = store;
    

   useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setData(toJS(vehicleMakes));
        
    }, 1000)
    
   }, [])

    

    return(
        <div className="layout">
            {store.showStoreDetails()}
            {loading && (
                <div className="flex">
                    <h2 className="flex__box">Loading...</h2>
                    </div>
            )}
            {data.length > 0 && (
                <div className="flex">
                    {data.map(vehicle => (
                        <div className="flex__box">
                            <img src={audi} className="image"/>
                            <h3 className="title">{vehicle.make}</h3>
                            <h3 className="title">{vehicle.abbreviation}</h3>
                            <Link className="flex__box__button" to={{pathname: "/vehicles/models", state:{vehicleMakeId:vehicle.id}}}>
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


