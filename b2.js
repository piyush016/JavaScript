let arr = [];
let set = new Set();

let username = ["john", "stephen", "sharon", "maling", "ruth"];

for (let i = 0; i < username.length; i++) {
  arr.push(username[i]);
  set.add(username[i]);
}

console.log(arr);
console.log(set);

let result1, result2;

console.time("Array");
result1 = arr.indexOf("stephen") !== -1;
console.log(result1);
console.timeEnd("Array");

console.time("Set");
result2 = set.has("stephen");
console.log(result2);
console.timeEnd("Set");
