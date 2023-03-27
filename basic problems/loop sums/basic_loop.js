//example output

// 1 2 3 4 5

let n=5;

let string1="";

for(let i=1; i<=n;i++ ){

    string1=string1+i+" ";

}
console.log(string1);


// example output 

//5 4 3 2 1 


let string2="";
for(let i=n; i>=1;i-- ){

    string2=string2+i+" ";

}
console.log(string2);


//output example

//1 3 5 7 

let string3="";

for(let i=1; i<=7; i=i+2 ){    //iwas increase +2 =i =3change .

    string3=string3+i+" ";

}

console.log(string3);


// output expect this type

// 1 2 3 4 5 4 3 2 1



let string4="";       //i want to concadinate so i create a string .

for(let i=1; i<=n; i++ ){    //main loop

    string4=string4+i+" ";

}
for(let i=n-1; i>=1; i--){
    string4=string4+i+" ";

}
console.log(string4);