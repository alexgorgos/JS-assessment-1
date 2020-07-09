document.getElementById("app").innerHTML = `
<h1>JS assessment</h1>
`;

let randomColor = elem => {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  elem.style.backgroundColor = color;
};

let displayLogEvent = elem => {
  elem.addEventListener("click", function () {
    if (elem.className === "circle") {
      console.log(this.style.backgroundColor);
    } else {
      console.log("I am a square");
    }
  });
};

let addRandomElemEvent = elem => {
  elem.addEventListener(
    "click",
    function () {
      let node = document.createElement("div");
      let randomBool = Math.random() >= 0.5;
      if (randomBool) {
        node.className = "circle";
        randomColor(node);
      } else {
        node.className = "square";
      }
      displayLogEvent(node);
      document.getElementById("container").appendChild(node);
      console.log(node);
    },
    false
  );
};

let circles = document.getElementsByClassName("circle");

if (circles) {
  for (let elem = 0; elem < circles.length; elem++) {
    randomColor(circles[elem]);
    displayLogEvent(circles[elem]);
  }
}

let btn = document.getElementById("btn");
addRandomElemEvent(btn);