
// let n = 5;
// for (let i = n; i >= -n; i--) {    //i=1    //main for loop

//     let z = "";
//     for (let j = 1; j <= Math.abs(i); j++) {    //j=5-1 ,j=1;j--// 4 spce
//         z = z + " ";                         //space point
//     }

//     for (let k = n; k >= Math.abs(i); k--) {         // loop of loop

//              z=z+k+" ";
//         // space + value== answer

//     }


//     console.log(z)
// }                        //working triangle.









// let n = 5;

// let print;

// for (let i = n-1; i >= 1; i--) {

//     let z = "";

//     for (let j = n; j > i; j--) {

//         z = z + " ";
//     }

//     let value = "";

//     for (let k = 1; k <= i; k++) {

//         value = value+k+" ";

//         print = z + value;
//     }
//     console.log(print);
// }



//learning.........../................./.............../.............../........./......

// let hour = new Date ().getHours();

// if (hour >= 0 && hour <= 13) {
//     console.log("good morning");

// } else if (hour >= 13 && hour <= 17) {
//     console.log("good afternoon");

// }else {
//     console.log("good Evening");
// }

// let hour= new Date().getHours();


//switch case;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let hour = "";

// for(let i="c"; i>="a"; i--){

//     hour = hour+i;
// }

// switch(hour){
//     case "abc":
//     console.log("good morning");
//     break;
//     case "b":
//     console.log("good afternoon");
//     break;
//     case "c":
//     console.log("good night");
//     break;
//     default:
//         console.log(" ==")
// }


// for in loop;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// const balaji={
//     "balaji":"balaji",
//     "age": "10",
//     "contect": "76746467689"
// }
// for(key in balaji){
//     console.log(key+ ":"+balaji[key])
// }



// fore of loop;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// let balaji =['balaji', 'balaji1', 'balaji2'];
// for(let key of balaji){
//     console.log("name :"+key)
// }




// const balaji={
//     "balaji":"balaji",
//     "age": "10",
//     "contect": "76746467689",
//     adress:{
//         name:"balaji3",
//         name1:"balaji4"
//     },
   

// }
// function greeting(){
//     let msg= 'i am balaji my age is '+balaji.age ;
//     console.log(msg);
// }
// greeting();

//factory functon;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// function balajiBakaji(name){
//     return{                      // this return value
//         name,
//         gree(){    // this also function
//             let msg = "my name is "+ this.name;
//             console.log(msg)
//         }
//     }
// }
// let balaji = balajiBakaji("hemanath");

// balaji.gree();


