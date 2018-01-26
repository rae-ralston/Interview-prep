/*
Jan 12 2017
In a symetrical matrix, calculate the absolute difference between the sums of 
its diagonals.

Example:

11  2   4
4   5   6
10  8  -12

sum left to right diag: 11 + 5 - 12 = 4
sum right to left diag: 4 + 5 + 10 = 19 
absolute difference of sums:  |4 - 19| = 15
correct output is 15
*/

let example = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

//FIRST SOLUTION
// let diagonalDifference = matrix => {
//   let leftToRightSum = 0
//   let rightToLeftSum = 0
//   for(let i = 0; i < matrix.length; i++) {
//     leftToRightSum += matrix[i][i]
//   }
//   for(let j = 0; j < matrix.length; j++){
//     let secondIndex = matrix.length - (j + 1)
//     rightToLeftSum += matrix[j][secondIndex]
//   }
//   leftToRightSum = Math.abs(leftToRightSum)
//   rightToLeftSum = Math.abs(rightToLeftSum)
//   return leftToRightSum - rightToLeftSum
// }

//SECOND SOLUTION
let diagonalDifference = matrix => {
  let leftToRightSum = 0
  let rightToLeftSum = 0
  let counter = 0
  matrix.forEach(array => {
    leftToRightSum += array[counter]
    rightToLeftSum += array[matrix.length - (counter + 1)]
    counter ++
  })
  return Math.abs(leftToRightSum - rightToLeftSum)
}

diagonalDifference(example)

/* NOTES AS I'M SOLVING

FIRST PASS
first checked to make sure the matrix read the -12 as a number
- wrote it with first for loop being <= matrix.length, but this is wrong, it's just <
- then remember I should put a -1 on the end of matrix.length in the next for loop
  for the same reason. (tacks an undefined on the end bc it's longer than the array by one)
- answer came up as 8, looking for 15, now for debugging
  -logging right sum left sum
  -both answers are 4, but the second number should be 19...
  -realized that the way I wrote it it was counting from the right side and the right 
    most indicy, so it was counting the same numbs as the first for loop but 
    backward :/
  -fixed by having for loop count up again then having the ssecond Index count backward
    (matrix.length - (j + 1)) this comes to the corret answer

SECOND PASS
first pass solved it in two for loops, which would require going over the data twice
this didn't seem as efficient as I could make it.
I combined the method I had into a single pass function that used forEach.
I also realized that I was taking the absolute values of each sum, not the answer
as a whole.
*/

