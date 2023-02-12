
// eample output

// 4 4 4 4
//  3 3 3
//   2 2 
//    1



// let n = 5


// for (let i = n; i >= 1; i--) {     //main loop     

//     let z = "";                    // only one string use //value store point

//     for (let j = n; j > i; j--) {  //nested loop in this loop of space

//         z = z + " ";               // saving in z string in j value

//     }

//     for (let k = 1; k <= i; k++) {   // other loop it is print value k

//         z = z + " " + k;             // this line connect with space and value

//     }
//     console.log(z);
// }                                     //working reverse triangle triangle




// let n = 5;

// let print;


// for (let i = n-1; i >=1; i--) {
//     let z = "";

//     for (let j = n; j > i; j--) {

//         z = z + " ";
//     }

//     let value = "";

//     for (let k = 1; k <= i; k++) {

//         value = k+" "+value;

//         print = z + value;
//     }
//     console.log(print);
// }


// let n = 5;
// let string = ""

// for (let i = 1; i <= n; i++) {
//     string = string + i + " ";
//     let string1 = "";
//     for (let j = n; j >= i; j--) {
//         string1 = string1 + " ";
//     }

//     console.log(string1 + string)
// }

// console.log(getspace(3) + numbers(1));
// console.log(getspace(2) + numbers(2));
// console.log(getspace(1) + numbers(3));
// console.log(getspace(2) + negativeDegreement(2));
// console.log(getspace(3) + negativeDegreement(1));

// function getspace(n){

// let string="";

// for(let i=1; i<=n; i++){
//     string =string+"-";
// }
// return string;
// }


// function numbers(n){

//     let number ="";

//     for(let i=1; i<=n; i++){
//         number =number + i +" ";
//     }
// return number;
// }

// function negativeDegreement(n){

//     let negative="";

//     for(let i=n; i>=1; i--){

//         negative+=i +" ";
//     }
//     return negative;
// }

// const n=5;

// let output;
// //i=5 ; 5>=1; 5--
// for(let i=n; i>=1; i--){   //main loop i five rows i want to print so declure this loop

//     let space="";           // this is store for space only
//     // j=5; 5=5; 5++;
//     // j=4; 4=5; 4++;
//     // j=3; 3=5; 3++;

//     for(let j=i; j<=n; j++){
//         space= space + ".";
//     }

//     let number="";        //this variable saved for number.

//     for(let k=1; k<=i; k++){

//         number =k+" "+number;     // this condition pring number reverse

//         output=space+number;      //this variable output print variable

//     }
//     console.log(output);
// }


// let myArray = [3,4,8,2,1];

// let sum = 0;

// myArray.forEach(items => sum += items);

// console.log(sum);


// let myArray = [3,4,8,2,1];

// let multipliedArray;

// multipliedArray=myArray.map(item=> item*30);

// console.log(multipliedArray);


// let n = 5;

// let table=[1,2,3,4,5,6,7,8,9,10];

// let product = (item) =>{
//     let result = i;

//     console.log(number+ "*" + item + "="+  String(result));
// }


// function product(item){
//     let result;
//     result = item * n;
//    console.log(item + " x " + n + " = "  + result);
// }
//  table.forEach(item => product(item));

let arr= [25, 4, 8, 5, 1];

let max= 0;

for(let i=1; i<=arr.length; i++){
    if(max<=arr[i]){
        max = arr[i];
    }else{
        max=max;
    }
}

console.log(max)