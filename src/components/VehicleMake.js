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
import Pagination from "./Pagination";



function VehicleMake({ store }) {
    
// states
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentRecords, setCurrentRecords] = useState([]);

    const { vehicleMakes } = store;
    

// functions
    const showData = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setData((toJS(vehicleMakes)).slice(indexOfFirstRec,indexOfLastRec));
        
    }, 500)
    }

   useEffect(() => {
    showData();
    
   }, [])

// pagination
const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(4);

const indexOfLastRec = currentPage*recordsPerPage;
const indexOfFirstRec = indexOfLastRec-recordsPerPage;

const nPages = Math.ceil(toJS(vehicleMakes).length / recordsPerPage);
console.log(nPages);

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
			
			<Pagination 
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default VehicleMake;


