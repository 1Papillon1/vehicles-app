import { makeAutoObservable } from "mobx";

class Store {
    vehicleMakes = [];
    vehicleModels = [];

    createVehicleMake(vehicleMake = {id: 0, make: "", abbreviation: ""}) {
        this.vehicleMakes.push(vehicleMake);
    }

    createVehicleModel(vehicleModel = {id: 0, model: "", makeId: 0}) {
        this.vehicleModels.push(vehicleModel);
    }
}

