function myDoWhile() {
  //Only change code below this

  var myNumbers = "";

  var i = 0;
  do {
    myNumbers += i;
    if (i != 9) myNumbers += ", ";
    i++;
  } while (i <= 9);

  return myNumbers;
  //Only change code above this
}

console.log(myDoWhile());

module.exports = myDoWhile;
