//example output

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1


let n = 5;

for (let i = 1; i <= n; i++) {        //main loop  start with 1

    let z = "";
    // z = ". . . . 1 "
    let print;          // this variable want to print all for thats it.
    //   j = 5; 5 > 1; 5--
    for (let j = n; j > i; j--) {      // space loop start with n reverse 
        z = z + ". ";
    }

    let y = "";         //this stric i want print reverse
    // k = 2; 2 <= 1; 2++
    for (let k = 1; k <= i; k++) {    // k loop
        y = k + " " + y;
        print = z + y;
    }

    console.log(print);
}   //working triangle