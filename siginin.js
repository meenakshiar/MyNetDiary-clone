document.querySelector("#signup-button").addEventListener("click", function (){
    signIn();
});

var arrLS = JSON.parse(localStorage.getItem("user-data")) || [];

// var arr =  [];
function signIn(event){
    // event.preventDefault();
    let emailid= document.querySelector("#email").value;
    let pswrd= document.querySelector("#pass").value;

    // arrLS.forEach(function (el){
    //     if (emailid==el.email && pswrd==el.pass){
    //         console.log(pswrd);
    // } else{
    //     alert("Inavlid Credentials");
    // }
    // });

    for (let i=0; i<arrLS.length; i++){
        if (emailid==arrLS[i][email] && pswrd==arrLS[i][pass]){
        console.log("correct");
        break;
       
           
    }
//    arrLS.push(obj);
    //  console.log("working");
    //  console.log(arr);
    //  localStorage.setItem("user-data", JSON.stringify(arr));
}


// console.log(arrLS)