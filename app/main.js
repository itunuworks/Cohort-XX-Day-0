'use strict'

module.exports = {
	findMinMax: function(numberArray){
		var max = numberArray[0];
		var min = numberArray[0];
		var i = 1;

		while (i<numberArray.length){
			if (numberArray[i]>max){
				max = numberArray[i];
			}
			if (numberArray[i]<min){
				min = numberArray[i];
			}
			i++;
		}
		if (min === max) {
			return [min];
		}
		else{
			return [min, max];
		}
	}, 

	fizzBuzz: function(number){
		var returnValue = number;

		if (typeof(number) === 'number'){
			if (number%3 === 0 && number%5 === 0){
				return 'FizzBuzz';
			}
			else if (number%3 === 0){
				return 'Fizz';
			}
			else if (number%5 === 0){
				return 'Buzz';
			}
		}
		return returnValue;
	},

	aritGeo: function(inputArray){
		var returnValue = -1;

		if (inputArray.length>=3){
			//Check if the array is arithmetic in type.
			if (checkType(inputArray, true) === true){
				returnValue = 'Arithmetic'
			}
			//Check if the array is geometric in type.
			else if (checkType(inputArray, false) === true){
				returnValue = 'Geometric';
			}
		}
		//Check for an empty array. 
		else if (inputArray.length===0){
			returnValue = 0;
		}

		return returnValue;		
	}
}

//A function to check if the array is arithmetic or geometeric.
function checkType(inputArray, isArithmetic){
	var returnValue = true;
	var difference;
	var i=2;

	//If we are checking for an arithmetic array, use this block of code.
	if (isArithmetic){
		difference = inputArray[1] - inputArray[0];

		while (i<inputArray.length && (returnValue)){
			if (inputArray[i] - inputArray[i-1] !== difference){
				returnValue = false;
			}
			i++;
		}
	}
	//If we are checking for a Geometric array, use this block of code.
	else{
		difference = inputArray[1] / inputArray[0];

		while(i<inputArray.length && (returnValue)){
			if(inputArray[i] / inputArray[i-1] !== difference){
				returnValue = false;
			}
			i++;
		}
	}

	return returnValue;
}