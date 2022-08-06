let check = (kg) => {
    let lbs = 2.2*kg;

    if(lbs < 100)
    return "underweight";

    else if (lbs >= 100 && lbs <= 150)
    return "you are ok"

    else
    return "obese" 
}
let kg = parseInt(prompt("enter the weight in kg: "))
document.write("The person with "+kg+ " kg weight is: "+check(kg))

