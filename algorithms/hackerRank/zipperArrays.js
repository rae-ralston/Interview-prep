https://www.interviewcake.com/question/javascript/merge-sorted-arrays
// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).
//
// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
//
// For example:
//
var myArray = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];
//
console.log(mergeArrays(myArray, alicesArray));
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a,b) => a - b)
}
// function mergeArrays(arr1, arr2) {
//   let merged = []
//     , i, j
//   for(i = 0; i < arr1.length; i++){
//     for(j = 0; j < arr2.length; j++) {
//       if(arr1[i] < arr2[j]) {
//         merged.push(...arr1.splice(0, 1))
//         console.log('+arr1', merged)
//       } else if (arr1[i] > arr2[j]) {
//         merged.push(...arr2.splice(0, 1))
//         console.log('+arr2', merged)
//
//       } else {
//         console.log('else')
//       }
//     }
//   }
// }
