let fun = (str) => {
  return new Promise((resolve, reject) => {
    var ans = /Paris/i;

    var result = str.match(ans);

    if (result) {
      resolve("Let's take trip tp paris");
    } else {
      reject("Invalid location");
    }
  });
};

let str = prompt("ENter the destination");

fun(str)
  .then(function (res) {
    document.write("Let's take trip Paris");
  })
  .catch(function (err) {
    document.write("Invalid location");
  });
