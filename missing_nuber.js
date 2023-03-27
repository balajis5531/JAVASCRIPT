// let brr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let arr = [3, 2, 7, 9, 11, 13];
// let harsh={};

// // for (let i = 0; i < brr.length; i++) {
// //   if (brr[i] !== arr[i]) {
// //     harsh[brr[i]] = 0;
// //   }
// //   console.log(harsh)

// // }




// for (let i = 0; i < brr.length; i++) {
//   {
//     harsh[brr[i]] = 1;
//   }
//   // console.log(harsh);
// }


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== harsh) {
//     harsh[arr[i]] -= 1;
//   }
// }
// console.log(harsh);

// let myar3 = [];

// for (let e in harsh) {
//   if (harsh[e] > 0) {

//     myar3.push(parseInt(e));
//   }
// }

// console.log(myar3);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 3, 4];

// let missing = [];

// for (let i=0; i<arr1.length; i++){
//   if (!arr2.includes(arr1[i])){
//     missing.push(arr1[i]);
//   }
// }

// console.log(missing);

// let arr = [1, 2, 3, 4, 7];
// let arr2 = [1, 3, 4];

// let missing = [];

// for (let i=0; i<arr1.length; i++){
//   let found = false;
//   for (let j=0; j<arr2.length; j++){
//     if (arr1[i] === arr2[j]){
//       found = true;
//       break;
//     }
//   }
//   if (!found){
//     missing.push(arr1[i]);
//   }
// }

// console.log(missing);
// let arr = [1, 2, 3, 3];

// let arr1 = [];
// arr1[0] = arr[0];
// let arr2 = [];
// arr2[arr.length - 1] = arr[arr.length - 1];
// for (let i = 1; i < arr.length; i++) {
//     arr1[i] = arr1[i - 1] + arr[i];

// }
// for (let i = arr.length - 2; i >= 0; i--) {
//     arr2[i] = arr[i] + arr2[i + 1];
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr1[i] === arr2[i]) {
//         console.log("YES");
//     }   
// }
// console.log("NO");

// let arr=[2, -1, 2, 3, 4, -5];

// let subarray = 0

// let sum = 0

// let subsequence = 0;

// let answers = [];

// subarray = arr[0]


// for (let i = 0; i < arr.length; i++) {

//   if(arr[i] > 0){
//     subsequence += arr[i]
//   }
//   sum += arr[i]
// console.log(sum)

  
//   if (sum > subarray) {
//     subarray = sum
//     console.log(sum)
//   }
//   if (sum < 0) {
//     sum = 0
//   }

// }

// console.log(subarray);

// subsequence === 0 ? subsequence = subarray : ""

// answers.push(subarray, subsequence)
// console.log(answers);

let s= "we promptly judged antique ivory buckles for the next prize"
let alpha="abcdefghijklmnopqrstuvwxyz"

let count=0;

alpha=alpha.split("");

s=s.toLowerCase();

for(let i=0;i<alpha.length;i++){
    if(s.indexOf(alpha[i])!==-1){
        count++;
    }
}

if(count==26) {
  console.log("pangram") 
} else{
  console.log("not pangram")

}