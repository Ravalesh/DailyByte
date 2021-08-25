/*

Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

*/
//Complexity: O(N)
var validPalindromeWithRemoval = (input) =>{

    var arr = input.replace(/\W+/g, "").toLowerCase().split('');
    var left = 0;
    var right = arr.length-1;
    while (left<right) {
        if(arr[left] !== arr[right]){
              /*
                Note: the second argument to substring: Zero-based index number indicating the 
                end of the substring. The substring includes the characters up to, but not including, 
                the character indicated by end. If end is omitted, the characters from start through
                 the end of the original string are returned.
                */
            if(validPalindrome(input.replace(/\W+/g, "").toLowerCase().substring(left + 1,right + 1))){
                //True if the left char is removed
                return true;
            }else if(validPalindrome(input.replace(/\W+/g, "").toLowerCase().substring(left ,right))){
                //True if the right char is removed
                return true;
            }else{
                //More removal is required
                return false;
            }
        }else{
            left++;
            right--;
        }
    }
    //Palindrome
    return true;
}

const validPalindrome = (input) =>{
    var arr = input.replace(/\W+/g, "").toLowerCase().split('');
    var left = 0;
    var right = arr.length-1;
    var phalindrome = true;
    while(left<right){
        if(arr[left] !== arr[right]){
            phalindrome = false;
            break;
        }
        left++;
        right--;
    }
    return phalindrome;
}

var input = `abccab`;
var isPalindrome = validPalindromeWithRemoval(input);
console.log(`String '${input}' is Palindrome?: ${isPalindrome}`);