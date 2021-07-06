




// const nums = [2,7,11,15];

// const target = 9;


// const twoSum = (nums, target) => {
//     // new object to store entries of nums array 
//     let storage = {};
    
//     // for loop to itirate over nums array  and indexes using nums.entries() function   
//     for (let [index, num] of nums.entries()) {
//         // search storage object for index & number of nums array entry, make sure its not undefined 
//         if (storage[num] !== undefined) 

//         // if the number is present and not undefined then return the current numbers index and index of the that number located in the storage array 
//         return [storage[num],index];

//         // if no entry from nums array is found or is undefined then take that number and subtract it from the target (9) and save that as the new KEY in the storage Array then add its index as Value 
//                 // target - num is the KEY = index is the VALUE 
//                 // these are key value pairs for the new storage array   
//         storage[target - num] = index;
        
//     };

// };



// console.log(twoSum(nums,target));















// console.log('testing');



// const nums = [2,7,11,15];

// const target = 9;


// const twoSum = (nums, target) => {

//     let solution = {};

//     // looping over index & number of each number in NUMS array
//     for (let [index , number ] of nums.entries()){

//         // console.log([index + 'index',number + 'number'])
//         // adding our number and index of each number in NUMS ARRAY to the SOLUTIONS object 
        
//         // but we change the INDEX to whatever  (9 - the current number) equals 
//         solution[target - number ] = index 
//         //            7           :  0
//         //            2           :  1     

//         //            -2          : undefined
//         //            -6          : undefined

        
//         //here we check to see if the CURRENT NUMBER we are on is located anywhere in our SOLUTIONS object
//         if (solution[number] !== undefined) {
//             console.log(solution)
//             // if it is then we RETURN that NUMBER (solution[number]) and its INDEX in a new ARRAY 
//             return [solution[number], index]
//         }
        
//         console.log(solution)
       
//     };
    
    



// };

// console.log(twoSum(nums,target));


const l1 = [1,2,4];

const l2 = [1,3,4];

const  mergeTwoLists = (l1, l2) => {
    console.log(l1)
    console.log(l2)
    let start = new listNode(-1);
    let head = start;


    while (l1 !== null && l2 !== null) {
        console.log(l1.value)
        if (l1.val <= l2.val) { 
            start.next = l1;
            l1 = l1.next;
        } else {
            start.next = l2;
            l2 = l2.next;
            
        }

        start = start.next
        
    }

    if (l1 !== null) {
        start.next = l1;
    } else {
        start.next = l2;
        
    }

    return head.next
    
    

};

class listNode {
    constructor (val = null, next = null){
        this.val = val
        this.next = next
    }
};




mergeTwoLists(l1,l2)