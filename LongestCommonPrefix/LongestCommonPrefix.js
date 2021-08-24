/*

Given an array of strings, return the longest common prefix that is shared amongst all strings.
Note: you may assume all strings only contain lowercase alphabetical characters.

*/

//Function has a Complexity of O(NM)
const longestCommonPrefex = (array) =>{
    var currentPrefix = "";
    currentPrefix = array[0];

    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        var firstWord = "";
        var secondWord = "";
        if(element.length < currentPrefix.length){
            firstWord = currentPrefix;
            secondWord = element;
        }else{
            firstWord = element;
            secondWord = currentPrefix;
        }

        while (secondWord.length>0) {
            if(firstWord.startsWith(secondWord)){
                currentPrefix = secondWord;
                break;
            }else{
                secondWord = secondWord.substring(0, secondWord.length-1);
            }

            if(secondWord.length === 0){
                //Common prefix not found
                return "";
            }
        }
    }

    return currentPrefix;

}

// O(MAX * n * log n )
const longestCommonPrefixTake2 = (a) =>{

    let size = a.length;
   
        /* if size is 0, return empty string */
        if (size == 0)
            return "";
   
        if (size == 1)
            return a[0];
   
        /* sort the array of strings */
        a.sort();
        console.log(`sorted array: ${a}`);
        /* find the minimum length from first and last string */
        let end = Math.min(a[0].length, a[size-1].length);
        console.log(`end value: ${end}`);

   
        /* find the common prefix between the first and
           last string */
        let i = 0;
        while (i < end && a[0][i] == a[size-1][i] )
            i++;
   
        let pre = a[0].substring(0, i);
        return pre;
}

var inputArray = ["pure", "purell", "pur", "purchase", "puny", "punity", "pzedr"];

//var inputArray = ["colorado", "color", "cold"];

var longestPrefix = longestCommonPrefixTake2(inputArray);

console.log(`Longest Prefix: ${longestPrefix}`);