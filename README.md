# **PROJECT Cohort-XX-Day-0**

## About the project

This project contains **3 Andelabs functions**, all complete with a total of 30 test cases. It is developed as part of Andela Cohort XX Day 0 Home labs.

- findMinMax 

  - This function in the form `findMinMax(numberArray)` computes the minimum and maximum values in a **non empty number** array and returns the minimum and maximum values in the form `[min, max]`.

  	For example, 

    `findMinMax([1, 2, 3, 4]);`

    would have return value 

    `[1, 4]`

    and 

    `findMinMax([4837, 2, -384.23, 47, 384.23])`

    would have return value 

    `[-384.23, 4837]`

- fizzBuzz

  - This function in the form `fizzBuzz(number)` checks if the number passed is divisible by 3, 5 or Both. Where it is divisible by 3, it returns a 'Fizz' else if it is divisible by 5, return 'Buzz', else if it is divisible by both 5 and 3, return 'FizzBuzz'

    E.g. For the line of code

    `fizzBuzz(15)`

    would have a return value

    `'FizzBuzz'`

- aritGeo

  - This function in the form `aritGeo(inputArray)` checks if the passed array is a Geometric Progression, Arithmetic Progression or if it is at all a progression. if the array is Geometric, it returns `'Geometric'` else if it is arithmetic, it returns `Arithmetic`, else if it is none of both, it returns `-1` and if it is an empty array, it returns `-0`.

  	E.g. For the line of code

  	`aritGeo([2, 6, 18, 54, 162])`

  	would have a return value 

  	`'Geometric'`

## How to install

1. Copy https://github.com/itunuworks/cohort-xx-day-0

2. Clone the repo on your local file system using 

   `git clone https://github.com/itunuworks/cohort-xx-day-0`

3. Navigate into the cloned directory using `cd cohort-xx-day-0`

4. Enter the command `npm install` to install all dependencies

## How to run tests

From the root directory, just enter the command `npm run test`