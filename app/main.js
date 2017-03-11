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

		if (typeof(number) == 'number'){
			if (number%3 == 0 && number%5 == 0){
				return 'FizzBuzz';
			}
			else if (number%3 == 0){
				return 'Fizz';
			}
			else if (number%5 == 0){
				return 'Buzz';
			}
		}
		return returnValue;		
	}
}