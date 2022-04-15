// Define a function maxOfTwoNumbers that takes two numbers as arguments 
//and returns the largest of them. Use the if-then-else construct available in Javascript. 
//Do some googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2){
   return num1;
   }else {
   return num2;
 }    
}
console.log(maxOfTwoNumbers(12, 18));
console.log(maxOfTwoNumbers(18, 12));
console.log(maxOfTwoNumbers(11, 11));
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
 //answer1 = maxOfTwoNumbers(num1, num2);
 //return maxOfTwoNumbers(answer1, num3);
 return maxOfTwoNumbers(maxOfTwoNumbers(num1, num2),       num3);
}
console.log(maxOfThree(1, 2, 2));
console.log(maxOfThree(1, 1, 1));
console.log(maxOfThree(1, 2, 3));

//Write a function isCharacterAVowel that takes a character 
//(i.e. a string of length 1) and returns true if it is a vowel, 
//false otherwise.

function isCharacterAVowel(char1){
    var vowels = ['a', 'e', 'i', 'o', 'u']

    }
//Define a function sumArray and a function multiplyArray that sums and multiplies 
//(respectively) all the numbers in an array of numbers. 
//For example, sumArray([1,2,3,4]) should return 10, 
//and multiplyArray([1,2,3,4]) should return 24.
function sumArray(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
console.log(sumArray([1,2,3,4]));


// multiplication
function multiplyArray(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
console.log(multiplyArray([1,2,3,4]));

//Write a function that return the number of arguments passed to the function 
//when called.
function ArgCounter() {
	return arguments.length;
}
console.log(ArgCounter(10,20,30,40,50));

//Define a function reverseString that computes the reversal of a string. 
//For example, reverseString("jag testar") should return the string "ratset gaj"

function reverse(string) {
    var rev = new Array(string.length);
    for (var i = string.length - 1; i >= 0; i--) {
        rev[i] = string[string.length - i - 1];
    }
    return rev.join('');
}
console.log(reverse('aitnic'));

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//Write a function filterLongWords that takes an array of words and a number i 
//and returns the array of words that are longer than i characters long.
