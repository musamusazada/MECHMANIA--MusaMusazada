"use strict"
import {initMap} from './googlemap.js'
import {onSignUp} from './registration.js'
import Mechanic from './mechanicClass.js'
import carPartSelect from './carparts.js'
import renderCards from './mechanicCards.js';
import favCard from './favCard.js';
import {getFavStorage} from './favCard.js'
import sliderContent from './sliderContent.js';
import getStorage from './storageGet.js'
// import carouselCreate from './owlCarousel.js'
//Variables--DOM Objects
//Faved Count
let countFav;
//Faved IDs
let favedCards=[];
let cardContainer;
let localStorageArr;
//Slider;
//Create Carousel as soon as possible.
$(document).ready(function(){
    slider();
   carouselCreate()
  
});
window.onload =()=>{
    favedCards = getFavStorage();
    localStorageArr=getStorage();
    cardContainer = document.querySelector(".owl-carousel");
    countFav= document.querySelector("#count");
    countFav.textContent=favedCards.length;   
    favedCards
    carPartSelect();
    renderCards(cardContainer);
    favCard();
    sliderContent();
  
    favedCardsOnLoad(favedCards);
    
    window.addEventListener('storage',()=>{
        renderCards(cardContainer);
        favCard();
        window.location.reload();

    })

}

function favedCardsOnLoad(favedCards){
    favedCards.forEach(el=>{   
        document.querySelector(`#${el} .heart`).classList.add("fas");
    })
}

//Carousel Functin 
//+ Options
function carouselCreate(){
    $(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        stagePadding: 10,
        nav: false,
        dots: false,
        responsive:{
            0: {
                items: 1
            },
            1000:{
                items: 3
            }
        }
    })
    
}
//Favorite Slider
function slider(){
    $(".favSlider").hide();
    $(".fav--display").click(function(){
        $(".favSlider").slideToggle();
    })
   
}
