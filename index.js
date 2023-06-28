function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();

  //initialize first and last characters of the word
  let start = 0;
  let end = word.length -1;

  while(start <= end){
    if(word[start] !== word[end]){
      return false;
    }
    start++;
    end--;
  }
return true;

}

/* 
  Add your pseudocode here
*/


/*
  Add written explanation of your solution here
*/
/*
1.The isPalindrome function takes a word as input.
2.It converts the word to lowercase using the convertToLowercase 
3.Two pointers, start and end, are initialized to the first and last characters of the word.
4.The function enters a loop that continues so long as start <= end.
5.Inside the loop, it compares the characters at positions start and end.
6.If the characters are not equal,false is returned.
7.If the characters are equal, the loop continues by moving start one position forward and end one position backward.
8.If all characters have been compared and found to be equal,returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", isPalindrome("racecar"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));

  console.log("Expecting:true");
  console.log("=>", isPalindrome("abba"));

    console.log("");

  console.log("Expecting:true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");

  console.log("Expecting:true");
  console.log("=>", isPalindrome("a")); 
  
  console.log("");

  console.log("Expecting:false");
  console.log("=>", isPalindrome("robot"));

  console.log("");


  console.log("Expecting:false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
