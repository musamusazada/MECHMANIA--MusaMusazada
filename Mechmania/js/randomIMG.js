"use strict"
const imgArr=["assets/images/mechanics_profile/mech1.jpg","assets/images/mechanics_profile/mech2.jpg","assets/images/mechanics_profile/mech3.jpg","assets/images/mechanics_profile/mech4.jpg"]
export default function randomImg(){
    return imgArr[Math.round(Math.random()*2+1)];
}