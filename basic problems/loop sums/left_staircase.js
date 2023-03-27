// example outlput
//1 
//1 2 
//1 2 3
//1 2 3 4
//1 2 3 4 5




const n = 5;

for (let i = 1; i <= n; i++) {

    let row = "";

    if(i%2==1||i%2==0){

    for (k = 1; k <= i; k++) {

        row += k + " ";

    }

    }
    console.log(row);
}

for (let l = n; l >= 1; l--) {

    let row = "";

    if(l%2==0||l%2==1){

    for (s = 1; s <= l; s++) {

        row=row + s+" ";

    }

    }
    console.log(row);
}

// const n = 4;

for(let i=1; i<=n; i++){

  let string="";

  for(let j=1; j<=n; j++){
  
    if(j<=i){    

      string=string + j +" ";

    }else{

      string=string+". "; 

    }


  }

  console.log(string);
}