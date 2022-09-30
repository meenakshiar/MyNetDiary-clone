
var slideImage = document.querySelectorAll(".slide-image");
var slideContainer = document.querySelectorAll(".slides-container");
var nxtBtn = document.querySelectorAll(".next-btn");
var prevBtn = document.querySelectorAll(".prev-btn");
var navDots = document.querySelectorAll(".nav-dots");

function move () {
    slideImage.forEach((img, i) => {
        img.style.left= i*100+"%";
    });
    slideImage[0].classList.add("active"); 
}
move();

// create nav dots 
let numOfImages= slideImage.length;
let slideWidth = slideImage[0].clientWidth;

// function createNavDots (){
//     for (i=0; i<numOfImages; i++){
//        const dot = document.createElement("div");
//        dot.classList.add("single-dot");
//        navDots.appendChild(dot);
//     }

// }
// createNavDots ();

nxtBtn.addEventListener("click", () => {
    slideContainer.style.transform = "translateX(-" + slideWidth + 100 + "px)";
});
