// Is this word a palindrome?
//
// Example:
// 	var word = "abhjkhba";
// 	To test pass word to palindrome() function
// 		-> palindrome(word);
// 	Prints out to console true if palindrome and false if not a palindrome


function palindrome(t) {
	var ispalin = true;
	for (i = 0; i < t.length; i++) {
		if(t[i] != t[t.length-i-1]) {
			ispalin = false;
		}
	}
	console.log(ispalin);
}
