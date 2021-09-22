function myEqualFunction(num) {
  //Only change code below this line
  if (num === 23) {
    return "Equal";
  }
  return "Not equal";

  //Only change code above this line
}
console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction("23"));
console.log(myEqualFunction("text"));

module.exports = myEqualFunction;
