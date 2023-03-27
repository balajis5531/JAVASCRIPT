// this is sorting the array

// ex

//arr=[6,4,7,1,2] convert to order ==[1,2,4,6,7]

let a = [7,0,22,2,1];

let b =0;

for (let i=0; i < a.length; i++){

    for(let j=0; j < a.length; j++){

        if(a[i] <= a[j]){

            b = a[i];

            a[i] = a[j];

            a[j] = b;

        }
    }
}

console.log(a);