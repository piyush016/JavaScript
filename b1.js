let obj = {},
  map = new Map();
let user = ["piyush", "kumar", "kabir", "shubham"];

for (let i = 0; i < user.lenght; i++) {
  obj[i] = user[i];
  map.set(i, user[i]);
}

let result1, result2;

console.log(obj);
console.log(map);

console.time("Object");
result1 = obj.hasOwnProperty(1);
console.log(result1);
console.timeEnd("Object");

console.time("Map");
result2 = map.has(2);
console.log(result2);
console.timeEnd("Map");
