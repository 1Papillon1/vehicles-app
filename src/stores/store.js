import React from "react";
import { action, autorun, computed, makeObservable, observable, runInAction } from "mobx";
import firebase from "../services/firebase";



const refMakes = firebase.firestore().collection("makes");
const refModels = firebase.firestore().collection("models");

class Store {

    
    

    vehicleMakes = [];
    vehicleModels = [];
    state = "pending";


    
    

    constructor () {
        
        makeObservable(this, {
            vehicleModels: observable,
            vehicleMakes: observable,
            state: observable,
            totalVehicleModels: computed,
            totalVehicleMakes: computed,
            storeDetails: computed,
            createVehicleModel: action,
            createVehicleMake: action,
            assignMakeToModel: action,
            getMakesData: action,
            getModelsData: action
        });
        
        autorun(() => {
            this.getMakesData();
        })
        
        autorun (() => {
            this.getModelsData();
        })

        autorun(() => {
            if (this.totalVehicleMakes < 1 && this.totalVehicleModels < 1) {
                console.log("There are no makes or models in the store!");
            }
        })
    }

    createVehicleMake(vehicleMake = {id: 0, make: "", abbreviation: ""}) {
        this.vehicleMakes.push(vehicleMake);
    }

    

    createVehicleModel(vehicleModel = {id: 0, model: "", makeId: null}) {
        this.vehicleModels.push(vehicleModel);
    }

    get totalVehicleMakes() {
        return this.vehicleMakes.length;
    }

    get totalVehicleModels() {
        return this.vehicleModels.length;
    }

    updateMake(makeId, update) {
        const makeIndexAtId = this.vehicleMakes.findIndex((vehicleMake) => vehicleMake.id === makeId);
        if (makeIndexAtId > -1 && update) {
            this.vehicleMakes[makeIndexAtId] = update;
        }
    }

    getvehicleModelsByVehicleMake(makeId) {
        return this.vehicleModels.filter((vehicleModel) => {
            return vehicleModel.make && vehicleModel.id === makeId;
        })
    }

    assignMakeToModel(makeId, modelId) {
        const vehicleModelIndexAtId = this.vehicleModels.findIndex((vehicleModel) => vehicleModel.id === modelId);
        const vehicleMakeIndexAtId = this.vehicleMakes.findIndex((vehicleModel) => vehicleModel.id === makeId);

        if (vehicleModelIndexAtId > -1 && vehicleMakeIndexAtId > -1) {
            this.vehicleModels[vehicleModelIndexAtId].make = this.makes[vehicleModelIndexAtId];
        }
    }
    
    get storeDetails() {
        return `We have ${this.totalVehicleModels} total models and ${this.totalVehicleMakes} total makes.`
    }

    getMakesData() {
        refMakes.onSnapshot((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
                this.vehicleMakes.push(doc.data());
                //this.createVehicleMake({doc.id,doc.make,doc.abbreviation});
            });
            
        })
    }

    getModelsData() {
        refModels.onSnapshot((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
                this.vehicleModels.push(doc.data());
            })
        })
    }

    showStoreDetails() {
        console.log(this.storeDetails);
    }

    

    

}



export default Store;








