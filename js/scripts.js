var romNum = function(number) {
  var numArray = number.toString(10).split("").map(function(t){return parseInt(t)})
  numArray.reverse()
  // debugger;
  var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var romArray = ["M", "MM", "MMM"]

  for (var x=0; x < numArray.length; x++) {
    var arrayLength = x

    switch(arrayLength) {
      case 0:
        var onesPlace = numArray[0]
        if (onesPlace === 0) {
          console.log (0);
        } else {
          var convertNum = ( onesPlace - 1);
          // romanOne = ones[convertNum]
          romArray.splice(0, 0,ones[convertNum]);
        }
        break;
      case 1:
        var tensPlace = numArray[1]
      if (tensPlace === 0) {
        console.log (0);
      } else {

        var convertNum = (tensPlace - 1);
        // romanTen = tens[convertNum]

        romArray.splice(1, 0,tens[convertNum]);
      }
      break;

    }
  }

  romArray.reverse();
  return romArray.join("")
};
