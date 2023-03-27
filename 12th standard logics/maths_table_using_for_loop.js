// printing mathematics tables using for lopp

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


const n=2; //give the multiplication table you want

const m=20; //give how many numbers you want

let sum;

for(let i=1; i<=m; i++){

    sum = i * n;
    console.log(i + " x " + n + " = " + sum);

}