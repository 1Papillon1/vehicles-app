import React, {useState, useEffect} from "react";
import nextId from "react-id-generator";
import { db } from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";


function VehicleMakeForm({ store }) {

    let randomId = nextId();
    
    
// states
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
/*
const saveMake = async (e) => {
    if (make && abbreviation) {
        //store.createVehicleMake({id: randomId, make, abbreviation});
        e.preventDefault();
      try {
        const docRef = await addDoc((collection(db, "makes")), {
            id: randomId,
            make: make,
            abbreviation: abbreviation
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e)
      }
      
      setMake('')
      setAbbreviation('')
    }  
  }
*/


const saveMake = () => {
    if (make && abbreviation) {
        store.createVehicleMake({id: randomId, make, abbreviation});
        
      
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