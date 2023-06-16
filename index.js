let isError;
let cardHolderName;
let alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let inputFields = document.querySelectorAll("article form input");
// let labelFields=document.querySelectorAll("article label");
// inputFields[0].value="srijoy";
console.log(inputFields[0].value == "");

document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  isError = 5
  // console.log(e);
  for (i = 0; i <= inputFields.length - 2; i++) {
    if (inputFields[i].value === "") {
      console.log(inputFields[i]);
      if (i == 2 || i == 3) {
        if (i == 3 && inputFields[2].value === "") continue;
        errorMSG = document.createElement("p");
        errorMSG.innerText = "Can't be blank";
        errorMSG.setAttribute("class", "errorMSG");
        document.getElementsByClassName("expiryDateFields")[0].after(errorMSG);
        inputFields[i].style.border = "2px solid hsl(0, 100%, 66%)";
        isError--;
        continue;
      }

      errorMSG = document.createElement("p");
      errorMSG.innerText = "Can't be blank";
      errorMSG.setAttribute("class", "errorMSG");
      inputFields[i].after(errorMSG);
      inputFields[i].style.border = "2px solid hsl(0, 100%, 66%)";
      isError--;
    }

    else if (i != 0) {
      for (j = 0; j < alphabets.length; j++) {
        if (inputFields[i].value.search(alphabets[j]) != -1) {
          errorMSG = document.createElement("p");
          errorMSG.innerText = "Wrong format, numbers only";
          errorMSG.setAttribute("class", "errorMSG");
          if (i == 2 || i == 3) {
            if (i == 2) entered2 = true;
            if (i == 3 && entered2 == true) {
              isError--;
              continue;
            }

            document
              .getElementsByClassName("expiryDateFields")[0]
              .after(errorMSG);
            inputFields[i].style.border = "2px solid hsl(0, 100%, 66%)";
            isError--;
            continue;
          }
          inputFields[i].after(errorMSG);
          inputFields[i].style.border = "2px solid hsl(0, 100%, 66%)";
          isError--;
          // break;
        }
      }
    }


  }
  if (isError === 5) {
    setTimeout(() => {
      document.querySelector("form").style.display = "none";
      document.getElementsByClassName("thankYou")[0].style.display = "flex";
      document.getElementsByClassName("card-number")[0].textContent = document.getElementById("cardNumber").value;
      document.getElementsByClassName("name")[0].textContent = document.getElementById("cardHolder").value;
      document.getElementsByClassName("month")[0].textContent = document.getElementById("expiryDate").value;
      document.getElementsByClassName("year")[0].textContent = document.getElementById("expiryYear").value;
      document.getElementsByClassName("cvc-number")[0].textContent = document.getElementById("cvcNumber").value;
    }, 3000);
  }
});

document.getElementById("continue-btn").addEventListener("click", (e) => {
  // e.preventDefault();
  document.querySelector("form").style.display = "flex";
  document.getElementsByClassName("thankYou")[0].style.display = "none";
  // document.getElementById("cardNumber").value = "";
  // document.getElementById("cardHolder").value = "";
  // document.getElementById("expiryDate").value = "";
  // document.getElementById("expiryYear").value = "";
  // document.getElementById("cvcNumber").value = "";

  // document.getElementsByClassName("card-number")[0].textContent = document.getElementById("cardNumber").value = "";
  // document.getElementsByClassName("name")[0].textContent = document.getElementById("cardHolder").value = "";
  // document.getElementsByClassName("month")[0].textContent = document.getElementById("expiryDate").value = "";
  // document.getElementsByClassName("year")[0].textContent = document.getElementById("expiryYear").value = "";
  // document.getElementsByClassName("cvc-number")[0].textContent = document.getElementById("cvcNumber").value = "";
})

document.getElementById("cardHolder").addEventListener("keyup", (e) => {
  console.log(e);
  console.log(e.target.value);
  cardHolderName = e.target.value;
});

// function checkEmptyFields(){

// }
