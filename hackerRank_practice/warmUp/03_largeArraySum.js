//Jan 12th 2017

let largeArraySum = arr => {
  let sum = 0
  arr.forEach(num => sum += num)
  return sum
}

let largeNums = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
largeArraySum(largeNums)

//I think the challenge here was meant for Java or C++ in having to deal with 
//integers that are above a standard size... but JS handles this. JS will handle
//up to 53 bit integers, or approx 2^53. Above that it rounds. These numbers
//don't begin to approach that.
//JS can encode any number as a string. to work with larger numbers you'll want
//to use a library that can translate string numbers to values.
//here's a good blog post about it: http://www.2ality.com/2012/07/large-integers.html