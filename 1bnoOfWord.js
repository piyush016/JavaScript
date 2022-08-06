let str = prompt("Enter a string");
alert(wordCount(str));

function wordCount(str) {
  const arr = str.split(" ");

  return arr.filter((word) => word !== " ").length;
}
