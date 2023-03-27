// printing "rajni" and "superstar" in two methods

//  first method by checking the number is odd or even. 
// if the number is odd "rajni" print otherwise "superstar" print



for(let a = 1; a <= 100; a++){

    if(a % 2 == 1) {
       console.log(a + " Rajni");
    }
 
    else{
       console.log(a + " Superstar");
    }
 
 
    console.log(a++ + " Rajni");
    console.log(a + " Superstar");
 }
 
