// Program that checks whether the given character is alphanumeric or not.

// if str = "vijay123"

// output 

// the given str is vijay123 is a alphanumeric


const str = "Balajis007"

let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
 
    if (regex.test(str) == true) {
        
        console.log("The given string " + str + " is a Alphanumeric")
    }
    else {
        console.log("The given string " + str + " is not a Alphanumeric")
    }