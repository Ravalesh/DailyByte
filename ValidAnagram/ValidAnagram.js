/*

Given two strings s and t return whether or not s is an anagram of t.
Note: An anagram is a word formed by reordering the letters of another word.

*/
//O(N)
const isValidAnagram = (s, t) =>{

    var myMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(myMap.has(element)){
            myMap.set(element,myMap.get(element) + 1);
        }else{
            myMap.set(element,1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        const element = t[j];
        if(myMap.has(element)){
            if(myMap.get(element)>1){
                myMap.set(element,myMap.get(element) - 1);
            }else{
                myMap.delete(element);
            }
        }else{
           //Cannot be an anagram as a new character is encountered 
           return false;
        }
    }

    if(myMap.size > 0){
        //Cannot be an anagram and there seems to be unequal number of character occurences 
        return false;
    }else{
        //Anagram
        return true;
    }
}

const s = "listen";
const t = "silent";
const validAnagram = isValidAnagram(s, t);
console.log(` '${s}' and '${t}' form anagram?: ${validAnagram}.`);