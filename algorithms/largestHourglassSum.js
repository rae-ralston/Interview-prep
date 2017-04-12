let arr = [[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]]

const largestHourglassSum = arr => {
  let i, j
  let largestSum = 0
  for(i = 0; i < arr.length - 2; i++) {
    for(j = 0; j < arr[i].length -2; j++) {
      let sum = sumHourglass(i,j)
      if(sum > largestSum || (i === 0 && j === 0)) { largestSum = sum }
    } 
  }
  console.log(largestSum)
}

const sumHourglass = (i, j) => arr[i][j] 
  + arr[i][j + 1] 
  + arr[i][j + 2] 
  + arr[i + 1][j + 1] 
  + arr[i + 2][j] 
  + arr[i + 2][j + 1] 
  + arr[i + 2][j + 2]

largestHourglassSum(arr)
