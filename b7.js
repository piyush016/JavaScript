var v = prompt("enter the virus com");
var b = prompt("enter a blood compo");

var i = 0,
  j = 0,
  count = 0;

while (i < v.length && j < b.length) {
  if (v[i] === b[j]) {
    i++;
    j++;
    count++;
  } else {
    j++;
    count++;
  }
}

if (count == b.length) alert("Virus found");
else alert("No virus");
