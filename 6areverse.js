let fun = (n) => {
  let sum = 0;
  while (n != 0) {
    let p = n % 10;
    sum = sum * 10 + p;
    n = parseInt(n / 10);
  }
  return sum;
};

let x = prompt("Enter the number to find reversal number: ");
alert(fun(x));
