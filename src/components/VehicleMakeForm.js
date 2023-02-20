import React, {useState, useEffect} from "react";
import nextId from "react-id-generator";
import { db } from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { toJS } from "mobx";


function VehicleMakeForm({ store }) {

    

    
// states
const { vehicleMakes } = store;
const [isSidebarOpen, setSidebarOpen] = useState(false);
const ToggleSidebar = () => {
    isSidebarOpen === true ? setSidebarOpen(false) :
    setSidebarOpen(true);
}

const [make, setMake] = useState("");
const [abbreviation, setAbbreviation] = useState("");


// changes
const onMakeChanged = e => setMake(e.target.value);
const onAbbreviationChanged = e => setAbbreviation(e.target.value);

// functions

const data = toJS(vehicleMakes);
let ids = data.map(el => {
  return el.id;
 })
 let maxId = Math.max(...ids);

 let newId = maxId + 1;
 

const saveMake = () => {
    if (make && abbreviation) {
        store.createVehicleMake({id: newId, make, abbreviation});
        
      
      setMake('')
      setAbbreviation('')
      window.location.reload();
    }  
  }
  

    return (
        <div>
            <button className="button button--secondary" onClick={ToggleSidebar}>Add Makes</button>
        
        <div className={`sidebar ${isSidebarOpen == true ? 'active' : ''}`}>
        <div onClick={ToggleSidebar}><i className="icon fa fa-times"></i></div>
            <div className="form">
                <h2 className="form__title">Vehicle Makes</h2>
                <label className="form__label" htmlFor="make">Vehicle make:</label>
                <input className="form__input"
                    type="text"
                    id="make"
                    name="make"
                    value={make}
                    onChange={onMakeChanged}
                />

                <label className="form__label" htmlFor="abbreviation">Vehicle abbreviation:</label>
                <input className="form__input"
                    type="text"
                    id="abbreviation"
                    name="abbreviation"
                    value={abbreviation}
                    onChange={onAbbreviationChanged}
                />
                <button onClick={saveMake} >Add make</button>
            </div>
            </div>
        </div>
    )
}

export default VehicleMakeForm;