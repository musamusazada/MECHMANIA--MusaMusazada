"use strict"
import {initMap} from './googlemap.js'
import {onSignUp} from './registration.js'
import Mechanic from './mechanicClass.js'
import carPartSelect from './carparts.js'
//Map Initialization on Registration page load
window.onload=()=>{
    initMap();
    onSignUp();
}