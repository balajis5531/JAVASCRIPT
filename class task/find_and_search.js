function split(input) {

    let input_arr = [];

    let str = "";

    for (let i = 0; i < input.length; i++) {

        if ((input[i] == " ")) {

            input_arr.push(str);

            str = "";
        }

        else if (i == input.length - 1) {

            str += input[i];

            input_arr.push(str);

            str = "";
        }

        else {

            str += input[i];
        }

    }

    return input = input_arr;

}


let arr = split("He is a superstar.");

let find = split("is");

let replace = split("was a");

let detect_number = 1

let number_of_occ = 1;

for (let i = 0; i < arr.length; i++) {

    if (find[0] === arr[i]) {

        arr[i] = replace[0];

    }

}


let sentence = "";

for (let i = 0; i < arr.length; i++) {

    sentence += arr[i] + " ";

}

console.log(sentence);