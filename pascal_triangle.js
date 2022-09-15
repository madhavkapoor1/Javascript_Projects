/*
* Given an integer n, calculate the nth row of Pascal's triangle
* 
* @param n
*	 row number of Pascal's triangle, where the first row is n = 0
* 
* @return 
*	an array of the nth row of Pascal's triangle,
* 	or an empty array if n is not valid
*/
const ptRow = (n) =>
{
    let arr = [];
    
    //return for error input
    if(n < 0){ 
        return arr;
    }
    
    else{
        let z = n;
     
     arr.push(1); //defining the first element of the array, which is always going to be 1
     
     for(let i = 1; i <= n; i++){
         
         //For each subsequent element, the value is determined by multiplying the previous value by a fraction with changing numerator and denominator. These fractions are in the form (n/k) where n is decrementing by 1 and k is incrementing by 1. This fraction is represented by (z/i) and it is multiplied by the previous number of the row (arr[i-1]). This is why it was important to assign arr[0] = 1 beforehand.
         
         next_element=Math.floor((arr[i-1])*(z/i));
         
         z--;
         arr.push(next_element)
     }

     return arr;
}
}


// Replace with any value for n
let n = 4
console.log(ptRow(n))


//Test cases
if(n < 0){
    if (arr =! []){
    console.log("Failed for n is negative number")
    }
    else{
        console.log("Passed for n is negative number")
    }
}

if(n == 0){
    if (arr = [1]){
    console.log("Passed for for n = 0")
    }
    else{
        console.log("Failed for n = 0")
    }
}

if(n == 4){
    if (arr = [1, 4, 6, 4, 1]){
    console.log("Passed for for n = 4")
    }
    else{
        console.log("Failed for n = 4")
    }
}

