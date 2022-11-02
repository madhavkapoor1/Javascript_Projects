/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let intnum = 0;
    
    let dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] in dict){
            //first case of subtraction
            
            if(s[i] == 'I'){
                
                if(s[i+1] == 'V'){
                    intnum += 4;
                    i++;
                }
                
                else if(s[i+1] == 'X'){
                    intnum += 9;
                    i++
                }
                
                else{
                    intnum += dict[s[i]]; 
                }
}
            
            //second case of subtraction
            
            else if(s[i] == 'X'){
                
                if(s[i+1] == 'L'){
                    intnum += 40;
                    i++;
                }
                
                else if(s[i+1] == 'C'){
                    intnum += 90;
                    i++
                }
                
                else{
                    intnum += dict[s[i]]; 
                }
}
            
            //third case of subrtaction
            
        else if(s[i] == 'C'){
                
                if(s[i+1] == 'D'){
                    intnum += 400;
                    i++;
                }
                
                else if(s[i+1] == 'M'){
                    intnum += 900;
                    i++
                }
                
                else{
                    intnum += dict[s[i]]; 
                }
}
            
            
            else{
             intnum += dict[s[i]];   
            }
        }
        
    }

    return intnum;
};
