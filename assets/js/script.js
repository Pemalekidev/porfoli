'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});


function etat(){
  let date = new Date();
  let heure = date.getHours();
  let jour = date.getDay()
  //console.log(heure, jour);
  var lundi = document.getElementById('un');
  var mardi = document.getElementById('deu');
  var mercredi = document.getElementById('trois');
  var jeudi = document.getElementById('quatre');
  var vendredi = document.getElementById('cinq');
  var samedi = document.getElementById('sis');

  if((heure >= 8) && (heure < 18) && jour == 1 ){
    lundi.style.color = "rgb(10, 245, 65)";
    lundi.innerHTML = " ouvert";
    /*mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }else{
    lundi.style.color = "rgb(245, 10, 10)";
    lundi.innerHTML = " fermé";
    /*mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }

  if((heure >= 8) && (heure < 18) && jour == 2 ){
    mardi.style.color = "rgb(10, 245, 65)";
    mardi.innerHTML = " ouvert";
    /*lundi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }else{
    mardi.style.color = "rgb(245, 10, 10)";
    mardi.innerHTML = " fermé";
    /*lundi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }
  
  if((heure >= 8) && (heure < 18) && jour == 3 ){
    mercredi.style.color = "rgb(10, 245, 65)";
    mercredi.innerHTML = " ouvert";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }else{
    mercredi.style.color = "rgb(245, 10, 10)";
    mercredi.innerHTML = " fermé";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }
  
  if((heure >= 8) && (heure < 18) && jour == 4 ){
    jeudi.style.color = "rgb(10, 245, 65)";
    jeudi.innerHTML = " ouvert";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }else{
    jeudi.style.color = "rgb(245, 10, 10)";
    jeudi.innerHTML = " fermé";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    vendredi.innerHTML ="";
    samedi.innerHTML ="";*/
  }
  
  if((heure >= 8) && (heure < 18) && jour == 5 ){
    vendredi.style.color = "rgb(10, 245, 65)";
    vendredi.innerHTML = " ouvert";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    samedi.innerHTML ="";*/
  }else{
    vendredi.style.color = "rgb(245, 10, 10)";
    vendredi.innerHTML = " fermé";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    samedi.innerHTML ="";*/
  }
  
  if((heure >= 8) && (heure < 18) && jour == 6 ){
    samedi.style.color = "rgb(10, 245, 65)";
    samedi.innerHTML = " ouvert";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";*/
  }else{
    samedi.style.color = "rgb(245, 10, 10)";
    samedi.innerHTML = "fermé";
    /*lundi.innerHTML ="";
    mardi.innerHTML ="";
    mercredi.innerHTML ="";
    jeudi.innerHTML ="";
    vendredi.innerHTML ="";*/  
  }
  
  
}
etat();
