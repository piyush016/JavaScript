function reverseWord(str){
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""))
    return reverseWordArr.join(" ");
}

let str = prompt("Enter a string which you want to reverse: ");
alert(reverseWord(str))