function logicalAndOperator(num) {
  //Only change code below this
  if (num <= 80 && num >= 40) {
    return "Yes";
  }
  return "No";

  //Only change code above this line
}
console.log(logicalAndOperator(0));
console.log(logicalAndOperator(24));
console.log(logicalAndOperator(45));
console.log(logicalAndOperator(57));
console.log(logicalAndOperator(100));

module.exports = logicalAndOperator;
