"use strict";

//// Make Class & Id into a variable for make it clean
const button = document.querySelector(".submit");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const bmi = document.querySelector(".result");

///// Make the BMI function and formula

const bmiResult = (h, w) => Number(Math.trunc(w / h ** 2 / 100));

button.addEventListener("click", function (e) {
  e.preventDefault();

  const bmiResult = (weight.value / (height.value / 100) ** 2).toFixed(2, 0);

  if (height.value === "" || weight.value === "") {
    alert("Please Insert Right Value");
  }
  if (height.value < 0 || weight.value < 0) {
    alert("Please Insert Right Value");
  }

  if (bmiResult < 18.6) {
    bmi.textContent = `You're Under Weight
    Your BMI is ${bmiResult}`;
  } else if (bmiResult >= 18.6 && bmiResult < 24.9) {
    bmi.textContent = `Your Weight is Normal
    Your BMI is  ${bmiResult}`;
  } else {
    bmi.innerHTML = `You're Over Weight
    Your BMI is ${bmiResult}`;
  }
});

//   Prevent Errors
/*
  if (height === "" || isNaN(height)) {
    BMI.innerHTML = "Please Enter Right Value for Height";
  } else if (weight === "" || isNaN(weight)) {
    BMI.innerHTML = "Please Enter Right Value for Weight";
  } else {
    //Perform Calculation
    let result = (weight / height ** 2 / 100).toFixed(2);

    if (result < 18.6) {
      BMI.innerHTML = `You're Under Weight
      Your BMI is ${result}`;
    } else if (result >= 18.6 && result < 24.9) {
      BMI.innerHTML = `Your Weight is Normal
      Your BMI is ${result}`;
    } else {
      BMI.innerHTML = `You're Over Weight
      Your BMI is ${result}`;
    }
  }
});*/
