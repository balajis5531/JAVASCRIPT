
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


// JSON JavaScript Object Notation
//Given a array of student objects 
// 0. Find a student whose name is Aravind.
// 1. Find the eldest student
// 2. Find the students whose physics score is more than 80
// 3. Count the number of students whose total average is more than 70. 
let array_student_obj = [
    {
        name: "Aravind",
        age: 99,
        salary: 10000,
        marks: {
            maths: 80,
            physics: 78,
            chemistry: 90
        }
    },
    {
        name: "Parameshwari",
        age: 18,
        salary: 10000,
        marks: {
            maths: 95,
            physics: 95,
            chemistry: 89
        }
    },
    {
        name: "Barath",
        age: 21,
        salary: 10000,
        marks: {
            maths: 76,
            physics: 81,
            chemistry: 76
        }
    }, {
        name: "Saran",
        age: 55,
        salary: 10000,
        marks: {
            maths: 67,
            physics: 51,
            chemistry: 39
        }
    }];




    // for(let i =0; i<array_student_obj.length; i++){


    //     if(array_student_obj[i].name==="Aravind"){

    //         console.log("find successfully aravind name")

    //         break;

    //     }else{

    //         console.log("not aravind name");

    //         break;

    //     }
    // }

    //     let age_value=0;
    //     let ueser_value="";
    

    // for(let i=0; i<array_student_obj.length; i++){

    //     if(array_student_obj[i].age>=age_value){

    //          age_value= array_student_obj[i].age;
    //          ueser_value=array_student_obj[i];

    //     }
    // }
    // console.log(age_value, ueser_value);



// for (let i=0; i<array_student_obj.length; i++){

//     if(array_student_obj[i]["marks"]["physics"]>=80){
//         console.log(array_student_obj[i]);
        
//     }

// }

let arr=[];

array_student_obj.forEach(element => {


   let value = element["marks"]["maths"]+element["marks"]["physics"]+ element["marks"]["chemistry"];
   value= value/3;
   if(value>=70){
    arr.push(value+element['name']);
   }

});
console.log(arr)
//Hints: 
// console.log(array_student_obj[3].salary);
// let i = 1;
// console.log(array_student_obj[i].name == "Nanda");