/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let str_s = s.split('')
    let str_t = t.split('')
    let new_str = [];
    index_mapping = {}
    let z = 0;
    
    for(let i = 0; i < str_s.length; i++){
        
        //case for which key dosent exist
        
        if(index_mapping.hasOwnProperty(str_s[i]) === false){
 
            index_mapping[str_s[i]] = str_t[z];
            z++;
        }
        
        //key does exist
        else{
            z++;
        }
    }
    
    for(let a = 0; a < str_s.length; a++){
        new_str[a] = index_mapping[str_s[a]];
    }
    
    let output = new_str.join('')
    
    console.log(output)
    
    if(output == t){
        return true;
    }
    
    else{
        return false;
    }

    
};
