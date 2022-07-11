/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.querySelector(".input-field");
let convertBtn = document.querySelector(".convert-btn");
let metreFeet = document.querySelector(".metreFeet");
let litreGallon = document.querySelector(".litreGallon");
let kgPounds = document.querySelector(".kgPounds");

const metreToFeet = 3.281;
const litreToGallon = 0.219;
const kgToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  if (baseValue === "") {
    alert("Please input a number!");
  } else {
    metreFeet.textContent = `${baseValue} metres = ${(
      baseValue * metreToFeet
    ).toFixed(3)} feet | ${baseValue} feet = ${(
      baseValue / metreToFeet
    ).toFixed(3)} metres`;

    litreGallon.textContent = `${baseValue} litres = ${(
      baseValue * litreToGallon
    ).toFixed(3)} gallons | ${baseValue} gallons = ${(
      baseValue / litreToGallon
    ).toFixed(3)} litres`;

    kgPounds.textContent = `${baseValue} kg = ${(baseValue * kgToPound).toFixed(
      3
    )} pounds | ${baseValue} pounds = ${(baseValue / kgToPound).toFixed(3)} kg`;
  }
});
