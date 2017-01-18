/* All programming languages come with a set of operators. The following are basic math operators. */

/* This is the additon and subtraction operators at work. */
var addOne = 38;
var addTwo = 12;
var addFinal = addOne + addTwo;
document.write('<br>' + addFinal);


var subOne = 89;
var subTwo = 43;
var subFinal = subOne - subTwo;

document.write('<br>' + subFinal);


/* This is the multiplication and division operators at work. */ 

var multOne = 20;
var multTwo = 10;
var multFinal = multOne * multTwo;

document.write('<br>' + multFinal);

var divOne = 40;
var divTwo = 20;
var divFinal = divOne / divTwo;

document.write('<br>' + divFinal);

/*Modulus aka remainder in JS is a math operator that returns or gives you the remainder of a division operation. Modulus is often used to determine if a set of numbers is equal to something. */

var modOne = 16;
var modTwo = 5;
var modFinal = modOne % modTwo;

document.write('<br>' + modFinal);

var modThree = 9;
var modFour = 5;
var modTotal = modThree % modFour;

document.write("<br>" + modTotal);

/* In programming languages you should never divide by zero.  It will result in an error, that can oftentimes break your program and even crash your browser or computer. */

/* Incrementers and decrementers are used to add one or subtract one from a value.  These are most often used in loops. */

var incA = 3;
document.write('<br>Starting Number: ' + incA);
incA++; // adds one to incA
document.write('<br>Incremented: ' + incA);

/* The incrementer is replacing += 1.  Which adds 1 to the above variable. */

var decA = 6;
document.write('<br>Starting Number: ' + decA);
decA--; //subtracts one from decA
document.write('<br>Decremented: ' + decA);

/* The decrementer is replacing -= 1. Which subtracts 1 from the variable. */

/* The most commonly used operator in programming is the assignment operator. Its denoted with an equal sign. The assignemt operator assigns a value to an object. */
 var assignThis = 'This is a string assigned to assignThis';
 document.write('<br>' + assignThis);




 /* Advanced operators or logic operators are used to test for logic in programs. These operators are interested in evaluating something in either true or false. */

var a = 4;
var b =4;
if (a == b) {

	// do something.
	document.write('<br> They\'re equal!');

}

/* The === operator is the strict or absolute comparison operator. It determines if two pieces of data share the same value and type. */
var c ="78";
var d = "78";
if (c === d)	{

	// do something.
	document.write('<br> The variables are equal in type as well as value');

}

/* The != and !== operators are used to determine if two values are NOT equal.  != only evaluates the value. !== evaluates the value and the type. */

var e ="happy";
var f = "sad";
if (e != f)	{
	// do something
	document.write('<br> These values are not the same.');
}

var g = "dog";
var h = 7;
if ( g !== h)	{
	// do something

	document.write("<br> These values and types are not the same.");

}

/* Less than < and greater than > operators. These test to determine if one value is less than or greater than the other. */

var i = 3;
var j = 9;
if (i < j) {
	document.write('<br> i is less than j');

}

/* The less than or equal to <= and greater than or equal to >= operators are also used to determine values.  This time they take into consideration if the values are equal to one another. */
var k = 89;
var l = 56;
if (k >= l) 	{
	document.write('<br> the k value is greater than or equal to l');
}

/* The && "and" operator ties two elements together. */
var m = 45;
var n = 90;
var o = 45;
if (m == n && m == o)	{
	document.write('<br> m is equal to both n and o.');
}

/* The || or operator compares two elements to each other. It accepts a true evaluation if one or the other isn't false. */
var p = 89;
var q = 77;
var r = 89;
if (p == q || p == r)	{
	document.write('<br> p is either equal to q or equal to r');
}

/* Prompt() is a JS method run on the Window object that asks a user for input. */
var yourName = prompt('Please enter your name', 'ex. John Smith');

/* The code below evaluates if the user inputs James Bond into the yourName variable. */


if(yourName == 'James Bond')	{
	document.write('Welcome, 007.');
}else	{
	document.write('<br> Oh, hello ' + yourName);

}

/* Write some JS code that prompts the user to enter a score from 1 - 100. */

/* If the user enters any score above 50 write "You Passed!" Otherwise "Failed". */


var userScore = prompt('Please enter a score from 1 to 100.');

if(userScore >= 50)	{
	document.write('<br> You Passed!')
}else	{
	document.write('<br> Failed.');
}




































