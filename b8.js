function valid_email(str){
    var check = /[a-zA-Z0-9.]@[a-zA-Z0-9].[a-zA-Z]/

    if(str.match(check)){
        alert("Valid Email!!")
    }
    else{
        alert("Invalid email!!")
    }
}


str = prompt("Enter the email")
valid_email(str)

