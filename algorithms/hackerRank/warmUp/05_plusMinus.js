/*
Jan 12 2017
Given an array of integers, calculate which fraction of its elements are positive, 
which fraction of its elements are negative, and which fraction of its elements are 
zeroes, respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to 
six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

You must print the following 3 lines:

A decimal representing of the fraction of positive numbers in the array.
A decimal representing of the fraction of negative numbers in the array.
A decimal representing of the fraction of zeroes in the array.

Input
[-4, 3, -9, 0, 4, 1] 
Output
0.500000
0.333333
0.166667
*/

let input = [-4, 3, -9, 0, 4, 1]

let plusMinus = array => {
  let neg = 0
  let pos = 0
  let zero = 0
  array.forEach(num => {
    if(num === 0) {
      zero += 1
    } else if (num < 0) {
      neg += 1
    } else {
      pos += 1
    }
  })
  pos = (pos / array.length).toFixed(6)
  neg = (neg / array.length).toFixed(6)
  zero = (zero / array.length).toFixed(6)
  return pos + '\n' + neg + '\n' + zero
}

plusMinus(input)