
//example output

//    1
//    2
//    superstar
//    4
//    rajinikanth
//    superstar
//    7
//    8
//    superstar
//    rajinikanth
//    11
//    superstar
//    13
//    14
//    superstar rajnikanth

let n=15;

for(let i=1; i<=n; i++){      //FOR LOOP

    let string="";
    string=string+i;

    if(i%3==0&& i%5==0){                          //3 multiple values printcodition
        string="superstar rajnikanth";
    }
    else if(i%3==0){                      //5 values print condition
        string="superstar";
    }
    else if(i%5==0)
            string="rajinikanth";
    else
         string=i;

    console.log(string);
}