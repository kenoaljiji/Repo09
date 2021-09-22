function myForLoop1() {
  //Only change code below this

  var evenNumbers = "";

  for (var i = 0; i <= 8; i++) {
    evenNumbers += i;
    if (i === 8) break;
    i++;
    evenNumbers += ", ";
  }

  return evenNumbers;
  //Only change code above this
}

function myForLoop2() {
  //Only change code below this
  var evenInverseNumbers = "";

  for (var i = 8; i >= 0; i--) {
    evenInverseNumbers += i;
    if (i === 0) break;
    i--;
    evenInverseNumbers += ", ";
  }

  return evenInverseNumbers;

  //Only change code above this line
}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
  myForLoop1,
  myForLoop2,
};
