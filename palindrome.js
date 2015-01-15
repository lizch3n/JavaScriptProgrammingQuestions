var word = "abhjkhba";

function palindrome(t) {
	var ispalin = true;
	for (i = 0; i < t.length; i++) {
		if(t[i] != t[t.length-i-1]) {
			ispalin = false;
		}
	}
	console.log(ispalin);
}
palindrome(word);