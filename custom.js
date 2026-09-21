const forms = document.querySelectorAll(".formParent");

const metricForm = forms[0];
const imperialForm = forms[1];

const weightIndicator = document.getElementById("weightIndicator");
const statContent = document.getElementById("scoreStat_content");

const bmiScore = document.getElementById("bmiscore");
const bmiMarker = document.getElementById("bmi_marker");
const markerParent = document.getElementById("marker_parent");

const metricTab = document.getElementById("pills-home-tab");
const imperialTab = document.getElementById("pills-profile-tab");


// Reset BMI result
function resetResult() {

    bmiScore.innerText = "0.0";

    bmiMarker.innerText = "--";

    markerParent.style.left = "0%";

    weightIndicator.innerHTML = "<span></span> Enter Values";
    weightIndicator.className = "calcbadge grey";

    statContent.innerHTML =
        "Please enter valid height and weight values to calculate your Body Mass Index score.";
}


// Clear form inputs
function clearForms() {

    forms.forEach(function (form) {

        const inputs = form.querySelectorAll("input");

        inputs.forEach(function (input) {
            input.value = "";
        });

    });
}


// Update BMI result
function updateResult(bmi) {

    bmiScore.innerText = bmi.toFixed(1);

    bmiMarker.innerText = bmi.toFixed(1);


    // Marker position

    let markerPosition;

    if (bmi <= 18.5) {

        markerPosition =
            ((bmi - 16) / (18.5 - 16)) * 19.5;

    } else if (bmi <= 25) {

        markerPosition =
            19.5 + ((bmi - 18.5) / (25 - 18.5)) * 32;

    } else if (bmi <= 30) {

        markerPosition =
            51.5 + ((bmi - 25) / (30 - 25)) * 25.5;

    } else {

        markerPosition =
            77 + ((bmi - 30) / (40 - 30)) * 23;

    }

    markerPosition = Math.max(0, Math.min(markerPosition, 100));

    markerParent.style.left = markerPosition + "%";


    // Weight indicator

    if (bmi < 18.5) {

        weightIndicator.innerHTML = "<span></span> Underweight";
        weightIndicator.className = "calcbadge blue";

        statContent.innerHTML =
            "Your BMI indicates you are <b>underweight</b>. It may be beneficial to discuss nutritional support and health status with a healthcare professional.";

    } else if (bmi < 25) {

        weightIndicator.innerHTML = "<span></span> Normal Weight";
        weightIndicator.className = "calcbadge green";

        statContent.innerHTML =
            "Your BMI is within the <b>normal weight</b> range. Maintaining a balanced diet and regular physical activity supports ongoing wellness.";

    } else if (bmi < 30) {

        weightIndicator.innerHTML = "<span></span> Overweight";
        weightIndicator.className = "calcbadge orange";

        statContent.innerHTML =
            "Your BMI indicates you are in the <b>overweight</b> category. Healthy lifestyle modifications, such as regular physical activity and balanced nutrition, are recommended.";

    } else {

        weightIndicator.innerHTML = "<span></span> Obesity";
        weightIndicator.className = "calcbadge red";

        statContent.innerHTML =
            "Your BMI is categorized as <b>obese</b>. Consulting with a healthcare provider can provide personalized guidance regarding metabolic health and lifestyle adjustments.";
    }
}



// METRIC CALCULATION


metricForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const height = Number(
        metricForm.querySelector("#heightField").value
    );

    const weight = Number(
        metricForm.querySelector("#weightField").value
    );


    if (!height || !weight || height <= 0 || weight <= 0) {

        resetResult();
        return;
    }


    const heightInMeters = height / 100;

    const bmi =
        weight / (heightInMeters * heightInMeters);

    updateResult(bmi);
});



// IMPERIAL CALCULATION


imperialForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = imperialForm.querySelectorAll("input");

    const feet = Number(inputs[0].value);
    const inches = Number(inputs[1].value);
    const weight = Number(inputs[2].value);


    if (
        feet <= 0 ||
        inches < 0 ||
        weight <= 0 ||
        isNaN(feet) ||
        isNaN(inches) ||
        isNaN(weight)
    ) {

        resetResult();
        return;
    }


    // Convert feet + inches into total inches

    const totalInches =
        (feet * 12) + inches;


    // Imperial BMI formula

    const bmi =
        (weight * 703) /
        (totalInches * totalInches);


    updateResult(bmi);
});



// TAB CHANGE


metricTab.addEventListener("click", function () {

    clearForms();
    resetResult();
});


imperialTab.addEventListener("click", function () {

    clearForms();
    resetResult();
});



// RESET BUTTONS


forms.forEach(function (form) {

    form.addEventListener("reset", function () {

        setTimeout(function () {

            clearForms();
            resetResult();

        }, 0);

    });

});