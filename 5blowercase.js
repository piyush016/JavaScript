function alter(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    newString +=
      string[i] === string[i].toUpperCase()
        ? string[i].toLowerCase()
        : string[i].toUpperCase();
  }
   alert(newString);
  //  return newString
}

document.getElementById("btn").addEventListener("click", fun);
function fun() {
  let x = document.getElementById("s1").value;
  r = alter(x);

  // document.getElementById("demo").innerHTML = r;
}
