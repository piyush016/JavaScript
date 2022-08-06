let bookflight = (string) => {
  return new Promise((resolve, reject) => {
    let pattern = /book-flight/i;
    let result = string.match(pattern);
    if (result) {
      resolve("Your flight is Booked");
    } else {
      reject("Flight not Booked");
    }
  });
};
let bookhotel = (string) => {
  return new Promise((resolve, reject) => {
    let pattern = /book-hotel/i;
    let result = string.match(pattern);
    if (result) {
      resolve("Your flight is Booked");
    } else {
      reject("Flight not Booked");
    }
  });
};
let string = prompt("Want to book a flight enter book-flight");
bookflight(string).then(function (res) {
  alert(res);
});
let string1 = prompt("Want to book a hotel enter book-hotel");

bookhotel(string1)
  .then(function (res) {
    alert(res);
  })
  .catch(function (res) {
    alert(res);
  });
