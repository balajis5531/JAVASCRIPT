// JSON JavaScript Object Notation
//Given a array of student objects 
// 0. Find a student whose name is Aravind.
// 1. Find the eldest student
// 2. Find the students whose physics score is more than 80
// 3. Count the number of students whose total average is more than 70. 

let student_data
    = [{
        name: "Aravind",
        age: 44,
        salary: 10000,
        marks: {
            maths: 80,
            physics: 78,
            chemistry: 90
        }
    },
    {
        name: "Parameshwari",
        age: 43,
        salary: 10000,
        marks: {
            maths: 95,
            physics: 95,
            chemistry: 89
        }
    },
    {
        name: "Barath",
        age: 42,
        salary: 10000,
        marks: {
            maths: 76,
            physics: 81,
            chemistry: 76
        }
    }, {
        name: "Saran",
        age: 41,
        salary: 10000,
        marks: {
            maths: 67,
            physics: 51,
            chemistry: 39
        }
    }];


// 0. find the student by name
student_data.find(element => {

    const stu_name = "Aravind";
    
    const obj_stu_name = element["name"];

    if(stu_name === obj_stu_name){

        console.log(element);
    }

});

console.log("//********************//");


//1. find the eldest student in the class

let age=0;
let age_data;

for(let i=0; i < student_data.length; i++){

    if(student_data[i].age > age){

        age = student_data[i].age;
        age_data = student_data[i].name;
    }


}

console.log(age_data + " is the elder than all the students, his age is = " + age);
console.log("//********************//");

// 2. Find the students whose physics score is more than 80

let arr=[];

student_data.find(element => {

    const phy_mark = element["marks"]["physics"];

    const mark_value = 80;

    if(phy_mark > mark_value){
        arr.push(element["name"]);
    }
});

console.log(arr);
console.log("//********************//");

// 3. Count the number of students whose total average is more than 70. 

let avg = [];
let avg_arr = [];

student_data.find(element =>{

    const stu_avg = element["marks"]["chemistry"] + element["marks"]["maths"] + element["marks"]["physics"];

    const all_avg = stu_avg/3;

    const avg_value = 70;

    if(all_avg > avg_value){
        avg.push(element["name"]);
        avg_arr.push(all_avg);
    }

})

console.log(avg);