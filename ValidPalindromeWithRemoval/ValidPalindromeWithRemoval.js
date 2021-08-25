/*

Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

*/
//Complexity: O(N)
var validPalindromeWithRemoval = (input) =>{

    var arr = input.replace(/\W+/g, "").toLowerCase().split('');
    var left = 0;
    var right = arr.length-1;
    var mismatchCount = 0;
    while (left<right) {
        if(arr[left] !== arr[right]){
            mismatchCount ++;
            if(mismatchCount>1){
                return false;
            }
            left++;
        }else{
            left++;
            right--;
        }
    }
    return true;
}

var input = `abccab`;
var isPalindrome = validPalindromeWithRemoval(input);
console.log(`String '${input}' is Palindrome?: ${isPalindrome}`);