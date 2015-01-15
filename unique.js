// Find the unique value in the array
//
// Example:
//	 var a = [5,1,2,2,3,4,4,1,5];
//	Pass to unique() function 
//		-> unique(a)
// Print out the unique value

function unique(array) {

	for (i = 0; i < array.length; i++) {
		var matcher = new RegExp(array[i], 'g')
		if (array.toString().match(matcher).length == 1) {
			console.log(array[i]+ ' is Unique');
		}
	}
}
