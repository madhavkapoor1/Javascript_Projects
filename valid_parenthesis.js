/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
 let input = s.split("");

if(input.length % 2 !== 0){
    return false
}

 let storage = [];

 let dict = {

     "[": "]",
     "(":")",
     "{":"}"
 }

for(let par of input){

if(dict[par]){
    storage.push(dict[par])
}

else if(par == storage[storage.length - 1]){
    storage.pop();
}

else{
    return false
}

}

if(storage.length !== 0){
    return false
}

return true;

}
