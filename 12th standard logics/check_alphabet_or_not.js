// Program that check whether a given character is an alphabet or not.

// if str = "A";

// output

// the given character A is a alphabet


const str = "a";

let regex = new RegExp(/[a-zA-Z]/);
 


if (regex.test(str) == true) {

    console.log("The given character " + str + " is a Alphabet")
    
}
else {
    console.log("The given character " + str + " is not a Alphabet")
}