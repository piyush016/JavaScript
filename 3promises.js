let n = prompt("Enter a number: ");
let numTest = new Promise(function (resolve, reject) {
  if (n > 20) resolve("The number is greater than 20");
  else reject("The number is less than 20");
});

numTest
  .then((res) => {
    console.log(res);
  })
  .then(() => {
    console.log("Multiple function called");
  })
  .finally(() => alert("Done"));
