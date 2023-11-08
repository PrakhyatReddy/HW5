<!DOCTYPE html>
<html>
<head>
   <title>Interactive JavaScript Website</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   <style>
       .container {
           text-align: center;
           margin-top: 20px;
       }

       .result {
           font-weight: bold;
           margin-top: 10px;
       }
   </style>
</head>
<body>
   <div class="container">
       <h1>Interactive JavaScript Website</h1>
       <div class="row">
           <div class="col-md-6">
               <h3>Alerts and Messages</h3>
               <button class="btn btn-primary" onclick="showAlert()">Show Alert</button>
               <button class="btn btn-info" onclick="showCustomAlert()">Custom Alert</button>
               <hr>
               <h3>Text Manipulation</h3>
               <input type="text" id="textToChange" class="form-control" placeholder="Enter text">
               <button class="btn btn-success" onclick="changeText()">Change Text</button>
               <hr>
               <h3>Calculator</h3>
               <input type="number" id="num1" class="form-control" placeholder="Enter a number">
               <input type="number" id="num2" class="form-control" placeholder="Enter another number">
               <button class="btn btn-info" onclick="calculateSum()">Calculate Sum</button>
               <p class="result" id="sumResult"></p>
               <hr>
               <h3>Toggle Element</h3>
               <p id="toggleMe">This element can be toggled.</p>
               <button class="btn btn-warning" onclick="toggleVisibility()">Toggle Element</button>
               <hr>
               <h3>Current Date and Time</h3>
               <button class="btn btn-danger" onclick="getCurrentDateTime()">Get Date & Time</button>
               <p class="result" id="dateTimeResult"></p>
           </div>
       </div>
   </div>

   <script src="script.js"></script>
</body>
</html>
