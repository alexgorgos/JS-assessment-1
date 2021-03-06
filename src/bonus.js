// vertical line => paralel with y => x = 0

let coords = [
  [3, 2],
  [5, 5],
  [5, 7],
  [3, 10]
];
const verticalLine = coords => {
  let midways = [];
  // check if coords number is even
  if (coords.length % 2 === 0) {
    // sort coords
    coords.sort();
    // iterate +2
    for (let counter = 0; counter < coords.length - 1; counter += 2) {
      //check if coords pair is on the same x axis
      if (coords[counter][0] === coords[counter + 1][0]) {
        // calculate pair midway
        let midway = (coords[counter][1] + coords[counter + 1][1]) / 2;
        midways.push(midway);
      } else {
        console.log(`Error: coords pair not on the same x axis!`);
      }
    }
  } else {
    console.log(`Error: coords number not even!`);
  }
  // check is pair midways are equal
  if (sameYAxis(midways)) {
    console.log(`The symmetric line is (0,${midways[0]}).`);
  } else {
    console.log(`None`);
  }
};
const sameYAxis = arr => arr.every(elem => elem === arr[0]);
verticalLine(coords);