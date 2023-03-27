let n = 6;

let check = 0;

for (let i = 1; i <=n; i++) {

    if (n % i == 0) {
        check = check + 1;
    }
}
if (check== 2) {
    console.log(n + " is prime number")
} else {
    console.log(n + " is not prime number")
}

