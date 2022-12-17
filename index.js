let cardHolderName;
let inputFields=document.querySelectorAll("article input");
// let labelFields=document.querySelectorAll("article label");
// inputFields[0].value="srijoy";
console.log(inputFields[0].value=="");

document.getElementById("submit-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e);
    for(input of inputFields){
        console.log(input);
        if(input.value===""){
            errorMSG=document.createElement("p");
            errorMSG.innerText="Fields are empty";
            document.querySelector("form").append(errorMSG);
        }
    }
});

document.getElementById("cardHolder").addEventListener("keyup",(e)=>{
    console.log(e);
    console.log(e.target.value);
    cardHolderName= e.target.value;
})

// function checkEmptyFields(){

// }
