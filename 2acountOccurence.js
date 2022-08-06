function Char_Counts(str) {
  var uchars = {};

  str.replace(/\S/g, function (i) {
    uchars[i] = isNaN(uchars[i]) ? 1 : uchars[i] + 1;
  });
  return uchars;
}

var str = prompt("Enter a string: ");
console.log(Char_Counts(str));
