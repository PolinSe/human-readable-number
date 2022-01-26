module.exports = function toReadable (number) { 
  const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  const arr10 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty',
  'sixty','seventy', 'eighty', 'ninety'];

  const arr11 =['ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let a = arr1[number % 10]; // unit
  let b = arr10[Math.floor(number % 100 / 10)]; //dozen
  let c = arr1[Math.floor(number / 100)]; //hundred
  let d = arr10[number/10];  //10,20,30
  let f = arr1[number/100];  //100, 200, 300
  let g = arr1[number]; //11,12,19

  if (number.toString().length === 1) {return a} // 0-9
  else if (number >=11 && number<=19) {return (arr1[number])}  // 11-19
  else if ((number.toString().length === 2) && (number % 10 === 0)) {return d} // 10,20,30,40...90
  else if ((number.toString().length === 2) && (number % 10 !== 0)) {return `${b} ${a}`} // 21-29, 31-39, 41-49...91-99
  else if ((number.toString().length === 3) && (number % 100 === 0)) {return `${f} hundred`} // 100,200,300,400...900
  else if ((number.toString().length === 3) && (number % 10 !== 0) && (Math.floor(number / 10) % 10 === 0)) {return `${c} hundred ${a}`} //101, 203, 304...
  else if ((number.toString().length === 3) && (number % 10 === 0) && (Math.floor(number / 10) % 10 !== 0)) {return `${c} hundred ${b}`} //110, 220, 330...
  else if ((number.toString().length === 3) && (Math.floor(number % 100 / 10) === 1)) {return `${c} hundred ${arr11[number % 10]}`} //111, 112, 113, 211, 311..919
  else  {return `${c} hundred ${b} ${a}`} // 121, 222, 333...
}