// Longest Word
/*
Have the function LongestWord(sen) take the sen parameter being passed 
and return the longest word in the string. If there are two or more 
words that are the same length, return the first word from the string 
with that length. Ignore punctuation and assume sen will not be empty. 
Words may also contain numbers, for example "Hello world123 567"
Examples
  Input: "fun&!! time"
  Output: time
  Input: "I love dogs"
  Output: love 
  */

function LongestWord(sen) {

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = letters.toUpperCase();
  const nums = "1234567890";

  let longest = "";
  let word = "";

  for (let i = 0; i < sen.length; i++) {
    if (letters.includes(sen[i])
      || upperLetters.includes(sen[i])
      || nums.includes(sen[i])) {
      word = word + sen[i];
      if (word.length > longest.length) longest = word;
    } else {
      word = "";
    }
  }

  return longest;
}