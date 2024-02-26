/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here
	if (isFinite(num) && num === Math.floor(num)) {
		return -num; // Return the opposite of the input integer
	} else {
		return -1; // Return -1 if the input is not an integer
	}
	///Your code Ends here
}
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/