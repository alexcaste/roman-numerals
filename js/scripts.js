var romNum = function(number) {
  var numArray = number.toString(10).split("").map(function(t){return parseInt(t)});
  numArray.reverse();
  var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var thousands = ["M", "MM", "MMM"]
  var romArray = []

if (number <= 0) {
  return "There is no 0 in Rome";
} else if (number > 3999) {
  return "Rome can not count higher than 3999";
} else {

  for (var x=0; x < numArray.length; x++) {
    var arrayLength = x

    switch(arrayLength) {
      case 0:
        var onesPlace = numArray[0]
        if (onesPlace === 0) {
          console.log (0);
        } else {
          var convertNum = ( onesPlace - 1);
          romArray.splice(0, 0,ones[convertNum]);
        }
        break;
      case 1:
        var tensPlace = numArray[1]
      if (tensPlace === 0) {
        console.log (0);
      } else {
        var convertNum = (tensPlace - 1);
        romArray.splice(1, 0,tens[convertNum]);
      }
      break;
      case 2:
        var hundredsPlace = numArray[2]
      if (hundredsPlace === 0) {
        console.log (0);
      } else {
        var convertNum = (hundredsPlace - 1);
        romArray.splice(2, 0,hundreds[convertNum]);
      }
      break;
      case 3:
        var thousandsPlace = numArray[3]
      if (thousandsPlace === 0) {
        console.log (0);
      } else {
        var convertNum = (thousandsPlace - 1);
        romArray.splice(3, 0,thousands[convertNum]);
      }
      break;
    }
  }
}
  romArray.reverse();
  return romArray.join("");
};


$(document).ready(function() {
  $("form#roman").submit(function(event) {
    $(".user").empty();
    var user = parseInt($("input#user").val());
    var result = romNum(user);

    $(".result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
