import Mechanic from './mechanicClass.js'
import { MechanicArr } from './mechanicClass.js';
import {markerArr} from './googlemap.js';
export function onSignUp(){
    const fullname= document.querySelector("#fullname");
    const companyname = document.querySelector("#companyname");
    const contactnumber=document.querySelector("#contactnumber");
    const profession=document.querySelector("#profession");
    onInputCheck();
    const signUpButton = document.querySelector("#signup")
    signUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        checkRegistration();
      });
}

//Checking Input Values on Input;
function onInputCheck(){
   
    fullname.addEventListener('input',function(){
        lengthChecker(fullname,6)
    });
    companyname.addEventListener('input',function(){
        lengthChecker(companyname,3)
    });
    contactnumber.addEventListener('input',function(){
        numberCheckRegEx(contactnumber)
    });
    profession.addEventListener('input',function(){
        lengthChecker(profession,15)
    });
}

//Checking Input values on submit
function checkRegistration(){  
    let bool=true;
    const formElements = document.querySelectorAll(".input-item");
    formElements.forEach(el=>{
        if(el.classList.toString().includes("wrong") || el.value.length===0){
            bool=false;
        }
    })
    if(!bool){
        createModal("Oops! Please Fill All Fields :)");
    }else{
        createMechanic(fullname.value, companyname.value, contactnumber.value,profession.value,markerArr);
        window.location.reload();
    }
}

//Length Checker Method
function lengthChecker(obj,num,error){
    if(obj.value.length<num){
        obj.classList.add("wrong");
    }else{
        obj.classList.remove("wrong")  
    }
}
//Number RegEx Checker
function numberCheckRegEx(obj,error){
    const regExNumber =/^(\+\d{12,13})$/
    if(obj.value.match(regExNumber)){
        obj.classList.remove("wrong");
    }
    else{
        obj.classList.add("wrong");
    }
}

//Creating Mechanic on request. Adding it to the Local Storage.
function createMechanic(fullname,companyName,contactnumber,profession,location){
    const mechanic = new Mechanic(fullname,companyName,contactnumber,profession,location);
    MechanicArr.push(mechanic);
    localStorage.setItem("mechanics", JSON.stringify(MechanicArr));
}

//Error Modal
function createModal(text){
    const modal = document.createElement("div");
    modal.classList.add("error-modal");
    const modalTextBox = document.createElement("div");
    modalTextBox.classList.add("modal-text-box");
    const modalTitle = document.createElement("h1");
    modalTitle.textContent=text;
    const modalButton = document.createElement("button");
    modalButton.classList.add("modal-button");
    modalButton.textContent="OK";
  
    modalTextBox.appendChild(modalTitle);
    modalTextBox.appendChild(modalButton);
    modal.appendChild(modalTextBox);
    document.body.appendChild(modal);
    modalButton.addEventListener('click',function(){
        document.body.removeChild(modal);
    })
}
