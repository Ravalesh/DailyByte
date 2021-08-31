/*
Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.
*/

const intersectionOfNumbers = (num1,num2) =>{
    var runningCount = new Array();

    num1.forEach(element => {
        if(runningCount.indexOf(element,0)<0){
            runningCount.push(element);
        }
    });

    var intersection = new Array();
    num2.forEach(element => {
        if(runningCount.indexOf(element,0)>-1 && intersection.indexOf(element,0)<0){
            intersection.push(element);
        }
    });

    return intersection;
};


const num1 =  [2, 4, 4, 2];
const num2 = [2, 4, 1];
const intersection = intersectionOfNumbers(num1, num2);
console.log(` Intersection of '${num1}' and '${num2}': ${intersection}.`);
