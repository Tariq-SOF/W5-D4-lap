

let arr=[];

for(i= 0 ; i<=100 ; i++){

arr = [i];

let ndiv= document.createElement("div");

ndiv.style.cssText = "background-color: green; width: 10%;  height: 15px";

let a = document.createTextNode(arr);

let Odiv = document.getElementById("perdiv");

ndiv.appendChild(a);

Odiv.appendChild(ndiv);


if(arr % 2 == 0){
    ndiv.style.cssText = "background-color: green; width: 10%;  height: 40px";

} else if (arr % 2 == !0){

    ndiv.style.cssText = "background-color: yellow; width: 10%;  height: 40px";

}

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

 if (isPrime(arr)){
    ndiv.style.cssText = "background-color: red; width: 10%;  height: 40px";
  }

}


  
  

  
