let i=0;
let j=6;
function next(){
   document.getElementById("content"+ (i+1)).classList.remove("active1")
   i=(j+i+1)%j;
   document.getElementById("content"+(i+1)).classList.add("active1") 
   indicator(i+1);
}

function prev(){
   document.getElementById("content"+ (i+1)).classList.remove("active1")
   i=(j+i-1)%j;
   document.getElementById("content"+(i+1)).classList.add("active1") 
   indicator(i+1);
}
let dots=document.querySelectorAll(".nav-dots button")
//  console.log(dots)

function indicator(num){
   dots.forEach(function(dot){
       dot.style.backgroundColor="transparent";
   });
   let s=document.querySelector(".nav-dots button:nth-child(" +num+ ")")
   s.style.backgroundColor="white";
}
let images=document.querySelectorAll(".slide-image img")
console.log(images)
function dot(index){
   images.forEach(function(image){
        image.classList.remove("active1");
   });
   document.getElementById("content"+ index).classList.add("active1");
   i= index-1; 
   indicator(index);
}