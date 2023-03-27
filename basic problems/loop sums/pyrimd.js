// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1


// this condition



function doubleSide(n) {
    // let n = 4;
    for (let i = 1; i <= n; i++) {        //main loop  start with 1
        let number = "";
    
        for (let l = 1; l <= i; l++) {   //space loop
    
            number = number + l + " ";   // print space first side
    
    
        }
    
        let string1 = "";
    
        for (let m = n - 1; m >= i; m--) {
    
            string1 = string1 + ". ";
    
        }
    
    
        let z = "";
    
        let print;
    
        for (let j = n - 1; j > i; j--) {
    
            z = z + ". ";
        }
    
        let y = "";
    
    
        for (let k = 1; k <= i; k++) {
    
            if (k == n) {
    
                let number1 = "";
    
                for (let i = n - 1; i >= 1; i--) {
                    number1 = number+i;
                }
    
            }
    
            else {
    
                y = k + " " + y;
    
            }
    
    
            print = z + y;
        }
    
        console.log(number + string1+print)
    }
    }
    
    doubleSide(5);