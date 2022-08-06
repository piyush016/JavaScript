document.getElementById("btn").addEventListener("click", fun);

function fun() {
  let x = document.getElementById("s1").value;

  let str = [];
  for (let i = 0; i < x.length; i++) str.push(x[i]);

  str = str.sort();

  console.log(str);

//   let r = "";
//   for (let i = 0; i < str.length; i++) {
//     r += str[i];
//     document.getElementById("demo").innerHTML = r;
//   }
}
