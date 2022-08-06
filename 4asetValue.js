let event = new Set();
let e1={"fruit":"Apple", "color":"red"}
let e2={"fruit": "Mango","color":"orange"}
let e3={"fruit": "Banana","color": "yellow"}
let e4={"fruit": "Pineapple", "color": "yellow"}
let e5={"fruit": "Mango", "color": "orange"}
let e6={"fruit": "Kiwi", "color": "green"}

event.add(e1);
event.add(e2);
event.add(e3);
event.add(e4);
event.add(e5);
event.add(e6);

for(let i of event)
console.log(i)


var n = prompt("Enter the no. of items in set :")
var x = new Set()
for(let i=0;i<n;i++)
{
x.add(prompt("Enter element :"+(i+1)))
}
x.forEach(function(value){
document.write(value + " ")
})