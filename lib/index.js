"use strict";

document.getElementById("app").innerHTML = "\n<h1>JS assessment</h1>\n";

var randomColor = function randomColor(elem) {
  var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  elem.style.backgroundColor = color;
};

var displayLogEvent = function displayLogEvent(elem) {
  elem.addEventListener("click", function () {
    if (elem.className === "circle") {
      console.log(this.style.backgroundColor);
    } else {
      console.log("I am a square");
    }
  });
};

var addRandomElemEvent = function addRandomElemEvent(elem) {
  elem.addEventListener("click", function () {
    var node = document.createElement("div");
    var randomBool = Math.random() >= 0.5;
    if (randomBool) {
      node.className = "circle";
      randomColor(node);
    } else {
      node.className = "square";
    }
    displayLogEvent(node);
    document.getElementById("container").appendChild(node);
    console.log(node);
  }, false);
};

var circles = document.getElementsByClassName("circle");

if (circles) {
  for (var elem = 0; elem < circles.length; elem++) {
    randomColor(circles[elem]);
    displayLogEvent(circles[elem]);
  }
}

var btn = document.getElementById("btn");
addRandomElemEvent(btn);