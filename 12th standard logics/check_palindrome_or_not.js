// Write a Program to check palindrome or not

// if n = 121;

// output: when reversing the number the output must be the same number

//  121

let num = 202;

let orginialnum = num;

let reverse = 0;

while(num != 0){

    reverse = (reverse*10) + (num%10);

    num = parseInt(num / 10);

}

if(reverse == orginialnum){
    console.log("The given number " + orginialnum + " is a palindrome");
}

else{
    console.log("The given number " + orginialnum + " is not a palindrome")
}

