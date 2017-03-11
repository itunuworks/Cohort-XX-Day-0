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
	},

	aritGeo: function(inputArray){
		if (inputArray.length>=3){

			var d = inputArray[1] - inputArray[0];
			var r = inputArray[1] / inputArray[0];
			var i=2;
			var returnValue = 'Arithmetic';

			while (i<inputArray.length){
				if (inputArray[i] - inputArray[i-1] != d){
					returnValue = 'Geometric';
					break;
				}
				else if (i++ == inputArray.length-1){
					return returnValue;
				}
			}
			i = 2;
			while(i<inputArray.length){
				if(inputArray[i] / inputArray[i-1] != r){
					return -1;
				}
				else if (i++ == inputArray.length-1){
					return returnValue;
				}
			}
		}
		else if (inputArray.length==0){
			return 0;
		}
		else{
			return -1;
		}
		return returnValue;		
	}
}