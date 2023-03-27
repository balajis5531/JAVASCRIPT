// printing mathematics tables 

// 1 x 2 = 2
// 2 x 2 = 4 
// 3 x 2 = 6 
// 4 x 2 = 8 
// 5 x 2 = 10
// 6 x 2 = 12
// 7 x 2 = 14
// 8 x 2 = 16
// 9 x 2 = 18
// 10 x 2 = 20


const n = 2;

const table = [1,2,3,4,5,6,7,8,9,10];

let sum;

 table.forEach(item => {

    sum = item * n;
    console.log(item + " x " + n + " = " + sum);

 });


 //2 nd method 

 for(let i=0; i<table.length; i++){
    sum*=table[i];
    console.log(i+" X = "+sum);
 }
 