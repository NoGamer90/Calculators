// Number One
let feet1 = document.getElementById("feet1");
let inch1 = document.getElementById("inch1");

// Number Two
let feet2 = document.getElementById("feet2");
let inch2 = document.getElementById("inch2");

// Display boxes
let showNum1 = document.getElementById("showNum1");
let showNum2 = document.getElementById("showNum2");
let showResult = document.getElementById("showResult");
let output = document.getElementById("output");


function calculate() {

    // Get values
    let f1 = Number(feet1.value);
    let i1 = Number(inch1.value);

    let f2 = Number(feet2.value);
    let i2 = Number(inch2.value);


    // Convert feet into inches
    let totalInch1 = (f1 * 12) + i1;
    let totalInch2 = (f2 * 12) + i2;


    // Show entered values
    showNum1.innerHTML =
        f1 + " ft " + i1 + " in";

    showNum2.innerHTML =
        f2 + " ft " + i2 + " in";


    // Multiply
    let result = totalInch1 * totalInch2;


    // Show result in inches
    showResult.innerHTML = result + " in²";


    // Convert result back to feet and inches
    let resultFeet = Math.floor(result / 144);

    let resultInch = result % 144;


    // Display final output
    output.innerHTML =
        resultFeet + " feet " +
        resultInch + " inch";
}


// Run calculation whenever input changes

feet1.addEventListener("input", calculate);
inch1.addEventListener("input", calculate);

feet2.addEventListener("input", calculate);
inch2.addEventListener("input", calculate);

const container = document.querySelector(".shooting-stars");

function createStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    // Start from the right side
    star.style.left = (50 + Math.random() * 60) + "%";

    // Random height
    star.style.top = Math.random() * 70 + "%";

    // Random speed
    star.style.animationDuration =
        (0.8 + Math.random() * 1.2) + "s";

    container.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2500);
}


// Many stars continuously
setInterval(createStar, 100);


// Start with many stars
for (let i = 0; i < 30; i++) {
    setTimeout(createStar, i * 100);
}

setInterval(shootingStar, 1000);

const music = document.getElementById("bgMusic");
const button = document.getElementById("musicButton");

button.onclick = function () {
    if (music.paused) {
        music.play();
        button.innerHTML = "🔊 Music ON";
    } else {
        music.pause();
        button.innerHTML = "🔇 Music OFF";
    }
};