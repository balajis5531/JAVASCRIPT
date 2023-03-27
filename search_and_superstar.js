let arr="he is a superstar";

let find="is";

let replace= "was";

let input= arr.split(" ");

for(let i=0; i < input.length; i++){
    if (find===input[i]){
        input[i]=replace;
    }

}
let input_join= input.join(" ");

console.log(input_join);
