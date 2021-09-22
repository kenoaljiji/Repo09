function compareStrictValues(m) {
  //Only change code below this line
  if (m != 55) {
    return "Not equal";
  }
  return "Equal";

  //Only change code above this line
}
console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));

module.exports = compareStrictValues;
