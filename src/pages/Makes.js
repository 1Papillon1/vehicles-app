import React, {useState, useEffect} from "react";
import { makeObservable } from "mobx";
import nextId from "react-id-generator";
import { toJS } from "mobx";
import VehicleMake from "../components/VehicleMake";
import Footer from "../components/Footer";
import 'font-awesome/css/font-awesome.min.css';

function Makes({ store }) {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const ToggleSidebar = () => {
        isSidebarOpen === true ? setSidebarOpen(false) :
        setSidebarOpen(true);
    }

    const [make, setMake] = useState("");
    const [abbreviation, setAbbreviation] = useState("");

    const [model, setModel] = useState("");
    const [makeId, setMakeId] = useState(null);

    const onMakeChanged = e => setMake(e.target.value);
    const onAbbreviationChanged = e => setAbbreviation(e.target.value);

    const onModelChanged = e => setModel(e.target.value);
    const onMakeIdChanged = e => setMakeId(e.target.value);
    

    let randomId = nextId();

    const saveMake = () => {
        if (make && abbreviation) {
          const vehicleMake = store.createVehicleMake({id: randomId, make, abbreviation});
          setMake('')
          setAbbreviation('')
        }
      }

      
    

    return(
        <div>
            <button className="button button--secondary" onClick={ToggleSidebar}>Add vehicles</button>

            <VehicleMake store={store} />
            

            {store.showStoreDetails()}
        <div className={`sidebar ${isSidebarOpen == true ? 'active' : ''}`}>
        <div onClick={ToggleSidebar}><i className="icon fa fa-times"></i></div>
            <div className="form">
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

                <div className="form">
                    <label className="form__label" htmlFor="model">Vehicle Model:</label>
                    <input className="form__input"
                    type="text"
                    id="model"
                    name="model"
                    value={model}
                    onChange={onModelChanged}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Makes;