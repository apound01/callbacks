var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(element) {
  var x_sq = Math.pow(element.x, 2);
  var y_sq = Math.pow(element.y, 2);
  return Math.sqrt(x_sq + y_sq);

});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
