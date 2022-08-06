let f1 = (s) => {
  if (s[0] >= "a" && s[0] <= "z") {
    let r = s.charCodeAt(s[0]) - 97;
    document.write(
      "After updating string is: " + String.fromCharCode(65 + r) + s.slice(1)
    );
  } else {
    document.write("After updating string is: " + s);
  }
};

let f2 = (s) => {
  if (s[0].toUpperCase() == s[0]) {
    console.log("Executed!!");
    return s;
  } else {
    let res = "";
    res = s[0].toUpperCase();
    console.log("Capital: " + res);
    for (let i = 1; i < s.length; i++) {
      res += s[i];
      console.log(res);
    }
    return res;
  }
};

const s = prompt("Enter the string: ");
alert(f2(s));
