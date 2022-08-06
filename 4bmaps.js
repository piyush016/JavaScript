let n = prompt("Enter the no of key val pair");
let x = new Map();

for (let i = 0; i < n; i++) {
  let temp = prompt("Enter the value of key " + (i + 1));
  x.set(i, temp);
}

x.forEach(function (value, key) {
  console.log("Key: " +key+ " value: " + value);
});
