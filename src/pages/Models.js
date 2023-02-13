import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import VehicleModels from "../components/VehicleModels";
import Footer from "../components/Footer";
import nextId from "react-id-generator";

function Models({ store }) {
    useEffect(() => {
        document.title="VEHICLE MODELS | VEHICLES"
    }, [])
    const location = useLocation();

    let randomId = nextId();

// states
    const [model, setModel] = useState("");
    const { vehicleMakeId } = location.state;

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const ToggleSidebar = () => {
        isSidebarOpen === true ? setSidebarOpen(false) :
        setSidebarOpen(true);
    }

// changes
const onModelChanged = e => setModel(e.target.value);

// functions 

const saveModel = () => {
    if (model) {
      const vehicleModel = store.createVehicleModel({id: randomId, model, makeId: vehicleMakeId});
      setModel("");
    }
  }

    return(
        <div>
            <VehicleModels store={store}/>¸
                <button className="button button--secondary" onClick={ToggleSidebar}>Add Models</button>

                <div className={`sidebar ${isSidebarOpen == true ? 'active' : ''}`}>
                    <div onClick={ToggleSidebar}><i className="icon fa fa-times"></i></div>
                
                    <div className="form">
                        <h2 className="form__title">Vehicle Models</h2>
                        <label className="form__label" htmlFor="model">Vehicle model:</label>
                        <input className="form__input"
                            type="text"
                            id="model"
                            name="model"
                            value={model}
                            onChange={onModelChanged}
                            />
                        <button onClick={saveModel} >Add Model</button>
                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default Models;