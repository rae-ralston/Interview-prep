const printReverseArr = arr => arr.reduceRight((output, num) => {
    output += (num + " ")
    return output
  }, "")

let arr = [4,3,5,7]
printReverseArr(arr)