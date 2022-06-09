function palindrome(message){
  // wirte your code here
  let left=0;
  let right=message.length-1;
  while(left<right){
	  if(message.charAt(left)!==message.charAt(right))return false;
	  left++;
	  right--
  }
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log(palindrome('hello'));
console.log(palindrome('abcba'));