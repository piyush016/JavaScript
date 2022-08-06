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
  .catch(function (err) {
    alert(res);
  });
//
let flight = (str) =>
  new Promise((resolve, reject) => {
    if (str == "book-flight" || str == "bookflight") resolve("flight booked");
    else reject("flight blocked");
  });
let hotel = (str) =>
  new Promise((resolve, reject) => {
    if (str == "book-hotel" || str == "hotel") resolve("hotel booked");
    else reject("hotel blocked");
  });
let str1 = prompt("\nEnter the book-flight if u want ");
flight(str1)
  .then((val) => {
    alert(val);
    let str2 = prompt("\nEnter the book-hotel if u want");
    hotel(str2).then((val) => alert(val));
  })
  .catch((val) => alert(val));
