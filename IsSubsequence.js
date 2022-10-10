/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    //s is the string to find in t
    let i = 0;
    let j = 0;
    while(j<t.length && i<s.length){
        if(s[i]!=t[j]){
            j++;
        }else{
            i++;
            j++;
        }
    }
   if(i == s.length){
       return true;
   }
    
    else{
        return false;
    }
};
