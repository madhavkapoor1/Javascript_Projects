/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    for(let i = 0; i < nums.length; i++){
        
        let left_sum = 0;
        let right_sum = 0;
        
        //finding left sum
        for(let x = 0; x <i; x++){
            left_sum = left_sum + nums[x]
}
        
         //finding right sum
        for(let y = nums.length - 1; y > i; y--){
            right_sum = right_sum + nums[y]
}
        
        if(left_sum == right_sum){
            return i; 
        }
        
        
    }
  
    return -1;

};
