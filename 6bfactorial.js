let func = (n) => {
    let sum = 1;
    while(n != 0){
        sum = sum * n;
        n = n-1
    }
    return sum;
}

let x = prompt("Enter the number to find factorial number")
console.log(func(x))