//Jan 12 2017
//    #
//   ##
//  ###
// ####

let staircase = num => {
  for(let i = 1; i <= num; i++){
    console.log(' '.repeat(num - i) + '#'.repeat(i))
  }
}

staircase(5)

/*
Holy shit i meandered all over the place with this.  My initial thinking was on
point, but then I lost that when I couldn't get it to work immediately.
I wandered all over the place and finally googled the answer *blush*
I thought through and didn't get two good ways of solving this
- first, concatonate a string. .repeat was what I was missing for this one
- second, make two arrays and concat them. new Array(length) was what I was 
  missing from this one.
What I learned here: Write out the steps you think it'll be, follow those steps
trust yourself, you know the answer.
I also notice that some shapes of solving things are harder for me. Thinking 
through adding spaces to the front of a string and having the spaces and #'s
shift was something I got tripped up on.
*/