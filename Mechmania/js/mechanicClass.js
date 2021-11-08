import getStorage from "./storageGet.js";
export let MechanicArr = getStorage();

export default class Mechanic{
    constructor(name,company,contact,info,location){
        this._name= name;
        this._company=company;
        this._contact = contact;
        this._info=info;
        this._location = location;
    }
     fullInfo(){
        console.log(`Name: ${this._name} Company: ${this._company} Contact: ${this._contact} Info:${this._info} Location:${this.location}`);
    }
}