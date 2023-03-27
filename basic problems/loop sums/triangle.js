// triangle patter 

// if n = 5

// ........1
// .......1 2
// ......1 2 3
// .....1 2 3 4
// ....1 2 3 4 5


let n = 5;
for (let i = 1; i <= n; i++) {    //i=1    //main for loop

    let z = "";

    for (let j = n - 1; j >= i; j--) {    //j=5-1 ,j=1;j--// 4 spce

        z = z + " ";                         //space point

    }
    for (let k = 1; k <= i; k++) {         // loop of loop
        
        z = z + " " + k;                       // space + value== answer
    }
    console.log(z);
}                        //working triangle