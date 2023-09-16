// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  //first attempt - 'result' === 'W' will always return false 
  // because that's comparing two strings, not record.result
//   function superbowlWin(array) {
//     if ('result' === 'W') {
//         return 'year'
//     }
//   }
//   console.log(record.find(superbowlWin))


  function superbowlWin(array) {
    const trophyOrNot = array.find(record => record.result === 'W')
    return trophyOrNot ? trophyOrNot.year : undefined
  }

console.log(superbowlWin(record))