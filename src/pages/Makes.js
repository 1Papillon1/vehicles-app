import React, {useState, useEffect} from "react";
import { makeObservable } from "mobx";
import nextId from "react-id-generator";
import { toJS } from "mobx";
import VehicleMake from "../components/VehicleMake";
import Footer from "../components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import { collection, addDoc } from "firebase/compat/firestore";
import VehicleMakeForm from "../components/VehicleMakeForm";

function Makes({ store }) {
    


    return(
        <div>
            
            <VehicleMakeForm store={store} />
            <VehicleMake store={store} />
            

        
            <Footer />
        </div>
    )
}

export default Makes;