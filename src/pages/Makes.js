import React, {useState, useEffect} from "react";
import { makeObservable } from "mobx";
import nextId from "react-id-generator";
import { toJS } from "mobx";
import VehicleMake from "../components/VehicleMake";
import Footer from "../components/Footer";
import 'font-awesome/css/font-awesome.min.css';

function Makes({ store }) {
    
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
    const saveMake = () => {
        if (make && abbreviation) {
          const vehicleMake = store.createVehicleMake({id: randomId, make, abbreviation});
          setMake('')
          setAbbreviation('')
        }
      }

      
    

    return(
        <div>
            <button className="button button--secondary" onClick={ToggleSidebar}>Add Makes</button>

            <VehicleMake store={store} />
            

            
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
            <Footer />
        </div>
    )
}

export default Makes;