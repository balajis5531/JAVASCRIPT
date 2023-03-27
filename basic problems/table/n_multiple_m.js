/*
let n = 15;
let m = 5;

// Write code to print 
if n is a multiple of m 
or n is not a multiple of m

For the sample input put it should print

 15 is a multiple of 5
 
 hint: 12%3 gives 0.
*/

let n=15;
let m=5;

if(n % m ==0){
  console.log(n + " is multiple of " +m)
}
else {
  console.log(n + " is not multiple of " +m)
}