function inverseWhile() {
  //Only change code below this
  var fiveNumbers = "";
  var i = 5;
  while (i >= 0) {
    fiveNumbers += i;
    if (i === 0) break;
    fiveNumbers += ", ";
    i--;
  }
  return fiveNumbers;

  //Only change code above this line
}

console.log(inverseWhile());

module.exports = inverseWhile;
