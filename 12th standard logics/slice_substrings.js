// Program to slice substrings using for loop



const str = "I am learning JavaScript and it is cool!";

const n = "24";

console.log(str.slice(0, n));



let output = ['a', 'b', 'c', 'd', 'e', 'f']

var data = "";

for (i = 0; i < output.length; i += 2) {

    data += output.slice(i, i + 2).join(" ") + "\n";

}
console.log(data);
