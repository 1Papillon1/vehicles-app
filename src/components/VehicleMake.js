import { QuerySnapshot } from "@firebase/firestore";
import { get } from "mobx";
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    useParams
  } from "react-router-dom";
import audi from "../images/audi.png";
import firebase from "../services/firebase";
import Store from "../Stores/Store";
import { toJS } from "mobx";
import nextId from "react-id-generator";







function VehicleMake({ store }) {
    
    const [loading, setLoading] = useState(false);

    

    const newVehicleMakes = toJS(store.vehicleMakes);
    
    
    
    let randomId = nextId();

    

    
      
    


    return(
        <div className="layout">
            {newVehicleMakes.length > 0 && (
                <div className="flex">
                    {newVehicleMakes.map(vehicle => (
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


