// For 1 to N if a number is a multiple of 3 it should print Superstar
// If a number is a multiple of 5 it should say Rajnikanth
// If a number is a multiple of 3 and 5 it should say SuperStar Rajnikanth
// Else the code should print the number.
// Example output for n = 15.
// 1
// 2
// Superstar
// 4
// Rajnikanth
// Superstar
// 7
// 8
// Superstar
// Rajnikanth
// 11
// Superstar
// 13
// 14
// Superstar Rajnikanth

const n=15;

for(let i=1; i<=n; i++){

    if((i % 3 == 0) && (i % 5 ==0)){

        console.log("Superstar Rajni");
    }

    else if(i % 3 == 0){
        console.log("Superstar");
    }

    else if(i % 5 == 0){
        console.log("Rajni");
    }

    else{
        console.log(i);
    }
}