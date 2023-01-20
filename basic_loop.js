//example output

// 1 2 3 4 5

// let n=5;

// let string="";

// for(let i=1; i<=n;i++ ){
    
//     string=string+i+" ";

// }
// console.log(string);


// example output 

//5 4 3 2 1 
// let n=5;

// let string="";
// for(let i=n; i>=1;i-- ){
    
//     string=string+i+" ";

// }
// console.log(string);


//output example

//1 3 5 7 

// let n=5;

// let string="";

// for(let i=1; i<=7; i=i+2 ){    //iwas increase +2 =i =3change .
    
//     string=string+i+" ";

// }

// console.log(string);


// output expect this type

// 1 2 3 4 5 4 3 2 1

let n=5;

let string="";       //i want to concadinate so i create a string .

for(let i=1; i<=n; i++ ){    //main loop
    
    string=string+i+" ";

}
for(let i=n-1; i>=1; i--){
    string=string+i+" ";

}
console.log(string);