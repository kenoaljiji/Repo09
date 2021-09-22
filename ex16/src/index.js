function checkSign(num) {
  //Only change code below this

  return num == 0 ? "zero" : num > 0 ? "positive" : "negative";

  //Only change code above this
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

module.exports = checkSign;
