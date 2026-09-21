const form = document.querySelector(".formParent");
// let weightIndicator = ""
const weightIndicator = document.getElementById("weightIndicator");
    let statContent = ""



function calculateBMI() {

    const height = Number(document.getElementById("heightField").value);
    const weight = Number(document.getElementById("weightField").value);


    if (!height || !weight) {
        document.getElementById("bmiScore").innerHTML = "0.0";
        document.getElementById("bmi_marker").innerHTML = "0.0";
        document.getElementById("weightIndicator").innerHTML = " ";
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById("bmiscore").innerText = bmi.toFixed(1);

    document.getElementById("bmi_marker").innerText = bmi.toFixed(1);

    const bmiMarker = document.getElementById("marker_parent");
    let markerPosition;
    if (bmi <= 18.5) {
        markerPosition = ((bmi - 16) / (18.5 - 16)) * 19.5;
    } else if (bmi <= 25) {
        markerPosition = 19.5 + ((bmi - 18.5) / (25 - 18.5)) * 32;
    } else if (bmi <= 30) {
        markerPosition = 51.5 + ((bmi - 25) / (30 - 25)) * 25.5;
    } else {
        markerPosition = 77 + ((bmi - 30) / (40 - 30)) * 23;
    }

    markerPosition = Math.max(0, Math.min(markerPosition, 100));

    bmiMarker.style.left = markerPosition + "%";


    let bmiScore = bmi;

    if (bmiScore <= 18.5) {
        weightIndicator.innerHTML = "<span></span> Underweight";
        weightIndicator.className = "calcbadge blue";
    } else if (bmiScore <= 24.9) {
        weightIndicator.innerHTML = "<span></span> Normal Weight";
        weightIndicator.className = "calcbadge green"
    } else if (bmiScore <= 29.9) {
        weightIndicator.innerHTML = "<span></span> Overweight";
        weightIndicator.className = "calcbadge orange"
    } else {
        weightIndicator.innerHTML = "<span></span> Obesity";
        weightIndicator.className = "calcbadge red"
    }

    // scoreStat_content


   if (bmiScore <= 18.5) {
        statContent = document.getElementById("scoreStat_content").innerHTML = 'Your BMI indicates you are <b>underweight</b>. It may be beneficial to discuss nutritional support and health status with a healthcare professional.';
    } else if (bmiScore <= 24.9) {
        statContent = document.getElementById("scoreStat_content").innerHTML = "Your BMI is within the <b>normal weight</b> range. Maintaining a balanced diet and regular physical activity supports ongoing wellness.";
    } else if (bmiScore <= 29.9) {
        statContent = document.getElementById("scoreStat_content").innerHTML = "Your BMI indicates you are in the <b>overweight</b> category. Healthy lifestyle modifications, such as regular physical activity and balanced nutrition, are recommended.";
    } else {
        statContent = document.getElementById("scoreStat_content").innerHTML = "Your BMI is categorized as <b>obese</b>. Consulting with a healthcare provider can provide personalized guidance regarding metabolic health and lifestyle adjustments.";
    }



};

document.getElementById("heightField").addEventListener("input", calculateBMI);
document.getElementById("weightField").addEventListener("input", calculateBMI);


form.addEventListener("submit", function(e) {
    e.preventDefault();
    calculateBMI();
});


form.addEventListener("reset", function() {
    document.getElementById("bmiscore").innerHTML = "0.0";
    weightIndicator.innerHTML = "<span></span> Enter Values";
    weightIndicator.className = "calcbadge grey";

    document.getElementById("bmi_marker").innerHTML = "--";

    const bmiMarker = document.getElementById("bmi_marker").parentElement;
    bmiMarker.style.left = "0%";
})