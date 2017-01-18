// Write the function 

// findRepeat()
// findRepeat('aaaa') => 'a'
// findRepeat('ababab') => 'ab'
// findRepeat('abcabc') => 'abc'
// findRepeat('abcdef') => 'abcdef'
// findRepeat('aaaaf') => 'aaaaf'



let findRepeat = string => {
  let returnString = ""
  
  for(let i = 0; i < string.length; i++){
    returnString += string[i]

    for(let j = 0; j < string.length; j ++){
      let repeatCounter = 0
      let compareStringSlices = returnString == string.slice(j, j[returnString.length])
      if(compareStringSlices){
        j += returnString.length
        repeatCounter += 1
      }

      if(repeatCounter === string.length/returnString.length) {
        console.log('inside repeatCounter', returnString)
        return returnString.slice(0, repeatCounter-1)
      }
    }
  }

  console.log('returnString', returnString)
  return returnString
}











// let checkRepeat = (repeat, originalString) => {
//   for( let i = 0; i <= originalString.length; i){
//     if(!repeat = origionalString){
//     }
//   }
// }

// let findRepeat = string => {
//   let output = ""
//   for(let i = 0; i < string.length; i++){
//     output += string[i]
//     for(let j = 0; j < string.length; j++){
//       let substring = string.substring(j)
//       if(output === substring){
//         j += output.length
//       }
//     }
//   }
//   console.log('output', output)
//   return output
// }

findRepeat('aaaa')
findRepeat('ababab')
findRepeat('abcabc')
findRepeat('abcdef')
findRepeat('aaaaf')