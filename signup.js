document.querySelector("#signup-button").addEventListener("click", function (){
    signUp();
});

var arr = JSON.parse(localStorage.getItem("user-data")) || [];

// var arr =  [];
function signUp(event){
    // event.preventDefault();
     
     var obj = {
        email : document.querySelector("#email").value,
        pass : document.querySelector("#pass").value,
     };

     arr.push(obj);
     console.log("working");
     console.log(arr);
     localStorage.setItem("user-data", JSON.stringify(arr));
}