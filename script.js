// Function 1: Alert
function showAlert() {
    alert("Welcome to my website!");
}

// Function 2: Reverse Text
function reverseText() {
    const textToChange = document.getElementById("textToChange").value;
    const reversedText = textToChange.split('').reverse().join('');
    document.getElementById("textToChange").value = reversedText;
}


// Function 3: Sum
function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const sum = num1 + num2;
    document.getElementById("sumResult").textContent = `Sum: ${sum}`;
}

// Function 4: Toggle
function toggleVisibility() {
    const element = document.getElementById("toggleMe");
    element.style.display = (element.style.display === "none") ? "block" : "none";
}

// Function 5: Date and Time
function getCurrentDateTime() {
    const now = new Date();
    document.getElementById("dateTimeResult").textContent = now.toLocaleString();
}

// Function 6: Clear Inputs
function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("textToChange").value = "";
}

// Function 7: Custom Message
function showCustomAlert() {
    const message = prompt("Enter a custom message:");
    if (message) {
        alert(message);
    }
}
