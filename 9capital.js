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
const s = prompt("Enter the string: ");
f1(s);
