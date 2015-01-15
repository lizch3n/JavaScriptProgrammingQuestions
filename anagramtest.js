// Are the strings in the first and second arrays palindromes of each other?
//
// Example: 
// 	var a = ['abba', 'test', 'as', 'mee'];
// 	var b = ['baba', 'sets', 'asd', 'eme'];
// 	Is abba in string 1 a palindrome of baba in string 2?
//	
// To test pass your arrays to the function anagram() -> anagram(a,b)
// Prints to console 1 when it is a palindrome and 0 if not a palindrome

function anagram(a,b) {

	for (i = 0; i < a.length; i++) {
		var match;
		if (a[i].length == b[i].length) {
			var word = a[i];
			var word2 = b[i];
			var sorted1 = word.split('').sort();
			var sorted2 = word2.split('').sort()
			for (j = 0; j < sorted1.length; j++) {
				if(sorted1[j] == sorted2[j]) {
					match = 1;
				} else {
					match = 0;
				}				
			}
		} else {
			match = 0;
		}
		console.log(match);

	}	
}
