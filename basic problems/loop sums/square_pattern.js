// Hollow pattern

// 1 2 3 4 5
// 2       4
// 3       3
// 4       2
// 5 4 3 2 1

const n =5;

let res="";


for(let i = 1; i <= n; i++){

    for(let j = 1; j <= n; j++){

        if(i==1||j==1||i==n||j==n){

           res=res + j +" "
        }

        else {
            res=res + "  "
        }

    }
   res = res + "\n";
    
}

console.log(res);



// square pattern using numbers solved using two methods.

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5 


// method one

// const n = 5;

for(let a = 1; a <= n; a++){

    
    let row = "";

    for(let b = 1; b <= n; b++){

      
        row = row + a + " ";

    }
    console.log(row);
}

// method two

let string='';

let columns = 7;

let rows = 6;

for (let i = 1; i <= rows; i++) {

 for (let j = 1; j <= columns; j++) {

   string =string + i + ' ';
   
 }

 string += '\n';
}
console.log(string);