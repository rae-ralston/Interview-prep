//FIRST GO Jan 11th, 2017

let sumArray = arr => {
  let returnVal = 0
  arr.forEach(num => returnVal += num)
  return returnVal
}

sumArray([3,5,7,10])

/*
I first tried to solve this with a for loop, but that didnt work. Then I remembered
.forEach. ForEach operates on arrays and for each item in the array it whatever the 
call back function says.
So I refactored my initial for loop to be a .forEach. Then I thought I could just 
return line 5, but I realized that I still needed to return returnVal

CHECK this can be solved in O(n) time/space