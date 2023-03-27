// find area of rectangle

const w = 20;
const h = 10;

let area;

area = w * h;

console.log("Area of rectange " + area);


// from the given array find the sum of even and odd numbers

const a = [1,3,6,8,9,11];

let even=0;

let odd=0;

for(let i=0; i < a.length; i++){

    if(a[i] % 2 == 0){
        even = a[i]+even;
    }

    else{
        odd = a[i] + odd;
    }

}

console.log("even numbers " + even);
console.log("odd numbers " + odd);

// print the number without given number

// eg

// given number x=5

// output 

// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

const x=5; //print without this number

const n=10;

for(let i=1; i<=n; i++){

    if(i != x){

        console.log(i);

    }
}


// find out the given two numbers are equal or not

const aa =10;
const b=20;

if(aa === b){
    console.log(aa + " is equal to " + b);
}
else{
    console.log(aa + " is not equal to " + b);
}