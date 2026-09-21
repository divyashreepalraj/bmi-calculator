
const form = document.querySelector(".formParent");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const height = document.getElementById("heightField").value;
    const weight = document.getElementById("weightField").value;

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById("bmiscore").innerText = bmi.toFixed(1);




    let bmiScore = bmi;

      let weightIndicator = ""
      if (bmiScore <= 18.5) {
         weightIndicator = document.getElementById("weightIndicator").innerHTML = '<span></span> Underweight';
      } else if (bmiScore <= 24.9) {
         weightIndicator = document.getElementById("weightIndicator").innerHTML = "<span></span> Normal Weight";
      } else if (bmiScore <= 29.9) {
         weightIndicator = document.getElementById("weightIndicator").innerHTML = "<span></span> Overweight";
      } else {
         weightIndicator = document.getElementById("weightIndicator").innerHTML = "<span></span> Obesity";
      }



});





  