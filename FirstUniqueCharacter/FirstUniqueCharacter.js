/*
Given a string, return the index of its first unique character. 
If a unique character does not exist, return -1
*/

const firstUniqueCharacter = (input) =>{
    var myMap = new Map();

    for (let index = 0; index < input.length; index++) {
        const element = input.charAt(index);
        if(myMap.has(element)){
            myMap.set(element,myMap.get(element)+1);
        }else{
            myMap.set(element,1);
        }
    }
    var uniqueCharIndex = -1;
    let shouldSkip = false;
    myMap.forEach((value, key, map)=>{
        if (shouldSkip) {
            return;
        }
        if(value === 1){
            uniqueCharIndex = input.indexOf(key);
            shouldSkip = true;
        }
    });
    return uniqueCharIndex;
}

const input = "abcddbeae";
const firstUniqueCharIndex = firstUniqueCharacter(input);
console.log(`First unique character for '${input}' index: ${firstUniqueCharIndex}.`);