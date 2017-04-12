/*Jan 12 2017
Convert am/pm to military time

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

let convertTime = time => {
  let ampm = time.slice(time.length - 2, time.length)
  let timeArray = time.slice(0, time.length - 2).split(':')

  if(ampm === 'AM'){
    if (timeArray[0] === '12'){
      timeArray.splice(0, 1, '00')
      console.log(timeArray.join(':'))
    } else {
      console.log(time.slice(0, time.length - 2))
    }
  } else {
    if(timeArray[0] === '12'){
      console.log(timeArray.join(':'))
    } else {
      let hours = (parseInt(timeArray[0]) + 12).toString()
      timeArray.splice(0, 1, hours)
      console.log(timeArray.join(':'))
    }
  }
}

convertTime('07:05:45PM')
convertTime('04:59:59AM')
convertTime('12:40:22AM')