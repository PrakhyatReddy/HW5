// Function 1: Display an alert
function showAlert() {
    alert("Welcome to my HW 5 interactive website :)");
}

// Function 2: Change the text of an HTML element
function changeText() {
    const textToChange = document.getElementById("textToChange").value;
    document.getElementById("demo").innerHTML = textToChange;
}

// Function 3: Calculate the sum of two numbers
function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const sum = num1 + num2;
    document.getElementById("sumResult").textContent = `Sum: ${sum}`;
}

// Function 4: Toggle an element's visibility
function toggleVisibility() {
    const element = document.getElementById("toggleMe");
    element.style.display = (element.style.display === "none") ? "block" : "none";
}

// Function 5: Get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    document.getElementById("dateTimeResult").textContent = now.toLocaleString();
}

// Function 6: Clear input fields
function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("textToChange").value = "";
}

// Function 7: Get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    document.getElementById("dateTimeResult").textContent = `Current date and time: ${now.toLocaleString()}`;
}

