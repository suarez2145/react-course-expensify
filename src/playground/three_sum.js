

const nums = [-1,0,1,2,-1,-4];

const threeSum = (nums) => {
    let [solution, left, right] = [[],0,nums.length - 1];

    // if we get an array of numbers with less than 3 numbers we return the array , as the intrusctions say on leetcode
    if (nums.length < 3) {
        return solution
    }
    nums.sort((a,b) => {a - b});

    // going to itirate over the numbers & indexees of the numbers in nums array 
    for (let [index, number] of nums.entries()) {
        // if the current number is greater than 0 then we return solution because this will not add up to 0;
        if (number > 0) {
            return solution
        };
        // if the current number is equal to the last number (at the last index ) then we want to skip this number because that will not be a unique pair 
        if (number === nums[index-1]) {
            continue;
        };

        // defining our flags below 
        left = index+1;       // where our array begins on left side 
        right = nums.length-1;   // where our array ends on right side 


        let temp = 0;

        // while our left number is smaller than right number take temp and combine all 3 current numbers to see if they equal 0;
        while (left < right){
            temp = number + nums[left] + nums[right];
            // if temp ( all three numbers combined ) === 0 then we begin pushing a new array which contains [our current number, our nums[left], and our nums[right] ]) into our solutions array 
            if (temp === 0 ){

                solution.push([number, nums[left], nums[right]])
                // after the push we move our left flag (number) plus one to the right 
                left++;
                // after the push we move our right flag (number) minus one to the left  
                right--;

                    // this is making saying while our left flag is one less than our last number keep moving up 1 
                while (left < right && nums[left] == nums[left] -1) {
                    left++ 
                }
                // this is saying while our right flag is one higher than our last number keep moving down 
                while (left < right && nums[right] == nums[right] +1) {
                    right--;
                }
            }
            // these else if statement keep the flags moving left and right when the combined numbers DO NOT EQUAL 0

            // if the temp (all three numbers combined) DO NOT equal 0 then decrement by 1   
            else if (temp > 0){
                right--
            }
            // if the temp (all three numbers combined) DO NOT equal 0 then increment by 1    
            else if (temp > 0){
                left++
            };

        };




    }
    return solution;



};

threeSum(nums);