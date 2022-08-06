const add = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Adding the 2 no: " + (n1 + n2));
    }, 3000);
  });
};

const sub = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Subtracting the 2no: " + (n1 - n2));
    }, 3000);
  });
};

const mul = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Multiplication of the 2 no: " + n1 * n2);
    }, 3000);
  });
};

const div = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Divsion of the two no: " + n1 / n2);
    }, 3000);
  });
};

let n1 = parseInt(prompt("Enter the first no: "));
let n2 = parseInt(prompt("Enter the second no: "));

add(n1, n2).then(function (res) {
  console.log(res);
});

sub(n1, n2).then(function (res) {
  console.log(res);
});

mul(n1, n2).then(function (res) {
  console.log(res);
});

div(n1, n2).then(function (res) {
  console.log(res);
});
