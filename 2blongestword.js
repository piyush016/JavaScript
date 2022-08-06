function longest(str) {
  let word = str.split(" ");
  console.log(word);
  let maxLength = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > maxLength) {
      maxLength = word[i].length;
    }
  }
  return maxLength;
}

var str = prompt("Enter a string: ");
alert(longest(str));
