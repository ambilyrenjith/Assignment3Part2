"use strict";

//The Rock, Paper, Scissors Game 
/*

var input = window.prompt("Enter your choice:rock,paper or scissor");
var compchoice = Math.random();
if (compchoice < 0.35) {
    compchoice = "rock";
} else if (compchoice > 0.35 && compchoice < 0.70) {
    compchoice = "paper";
} else {
    compchoice = "scissor";
}
window.console.log("The computer choice is:" + compchoice);
window.console.log("The user's  choice is:" + input);

if (input === compchoice) {
    window.console.log("The result is a tie:");
} else if ((input !== "rock") && (input !== "paper") && (input !== "scissor")) {
    window.console.log("Invalid choice!");
}

if (input === "rock") {
    if (compchoice === "paper") {
        window.console.log("Paper wins!");
    } else if (compchoice === "scissor") {
        window.console.log("Rock wins!");
    }
    
}

if (input === "scissor") {
    if (compchoice === "paper") {
        window.console.log("Scissor wins!");
    } else if (compchoice === "rock") {
        window.console.log("Rock wins!");
    }
}
if (input === "paper") {
    if (compchoice === "scissor") {
        window.console.log("Scissor wins!");
    } else if (compchoice === "rock") {
        window.console.log("Paper wins!");
    }
}
*/

//Basic Calculator

/*
do {
    var firstNumber = window.prompt("Enter the first number:");
    var secondNumber = window.prompt("Enter the second number:");
    var operation = window.prompt("Which operation you would like to perform:(+, -, *, /)");
} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')    

function calculate(firstNumber, secondNumber, operation) {
    var result;
    
    firstNumber = parseInt(firstNumber, 10);        
    secondNumber = parseInt(secondNumber, 10);
    
    switch (operation) {
        case "+": 
            { 
                result = firstNumber + secondNumber;
                break;
            }
        case "-":
            { 
                result = firstNumber - secondNumber;
                break;
            }
        case "*":
            { 
                result = firstNumber * secondNumber;
                break;
            }
        case "/":
            { 
                result = firstNumber / secondNumber;
                break;
            }
    }
    return result; 
}
var res = calculate(firstNumber, secondNumber, operation);
window.alert(firstNumber + operation + secondNumber + " = " + res);
*/


//Death by Javascript

//STEP 1
/*
function alphorder(input) {
    "use strict";
    return input.split('').sort().join('');
}
window.console.log(alphorder("Javascript"));
*/

//STEP 2
/*
function upper(input) { 
  var array1 = input.split(' ');  
  var newarray1 = [];  
  
  for(var i = 0; i < array1.length; i++){  
      newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));  
  }  
  return newarray1.join(' ');  
}  
window.console.log(upper("the quick brown fox"));  
*/

//STEP 3
/*
function vowelnum(input) {
    "use strict";
  var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var i = 0;i<input.length;i++)
        {
          if(vowels.indexOf(input[i])!== -1) 
              count = count + 1;
        }
   return count;
  }
window.console.log(vowelnum("the quick brown fox"));  
*/

//STEP 4
/*
function generateId(l) {  
    var id = "";  
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
    for(var i=0; i < l; i++ ) {    
        id += char_list.charAt(Math.floor(Math.random() * char_list.length));  
    }  
    return id;  
}  
window.console.log(generateId(8));
*/


// STEP 5
/*
function longestCountry(input) {
    "use strict";
	var longest = input[0];
	for (var i = 0; i < input.length; i++) {
		if(input[i].length > longest.length){
			longest = input[i];
		}
	}
	return longest;
}
window.console.log(longestCountry(["Australia", "Germany", "United States of America"]));  
*/
