/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let storage = {}
    for(let i = 0; i < nums.length; i++){

        if(!storage[nums[i]]){
            storage[nums[i]]=  1
        }

        else if(storage[nums[i]]){
            nums.splice(i, 1)
            i--;
        }
    }
}
