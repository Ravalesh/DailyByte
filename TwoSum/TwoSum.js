/*

Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.

*/
const twoSum = (arr, sum) =>{
    var traceArray = new Array();
    var targetFound = false;
    let shouldSkip = false;
    arr.forEach(element => {
        if (shouldSkip) {
            return;
        }
        if(traceArray.includes(element)){
            targetFound = true;
            shouldSkip = true;
        }
        traceArray.push(Math.abs(sum-element));
    });

    if(targetFound){
        return true;
    }else{
        return false;
    }
}

const inputArray = [4, 2, 6, 5, 2];
const inputSum = 4;
const hasTarget = twoSum(inputArray, inputSum);
console.log(`Array '${inputArray}' has the target?: ${hasTarget}`);