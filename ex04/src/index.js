function compareDifferentValues(m, n) {
  //Only change code below this line
  if (m === n) {
    return "Equal";
  }
  return "Not equal";

  //Only change code above this line
}
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues(`8`, 8)); // I cannot find this symbol
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

module.exports = compareDifferentValues;
