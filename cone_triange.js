
// eample output

// 4 4 4 4
//  3 3 3
//   2 2 
//    1



let n=5

for (let i = n-1; i >=1; i--) {
    let z = "";
    for (let j = n; j > i; j--) {
        z = z + " ";
    }

    for (let k = 1; k <= i; k++) {
        z = z + " " + i;

    }
    console.log(z);
}//working reverse triangle triangle

