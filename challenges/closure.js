// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
`The nested function is within the function [myFunction]. Due to const haveing a block scope it means anything within its 'block' can read it. Since [nestedFunction] falls within the {} of [myFunction] it is within it's scope.`

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

summation = (startNum) => {
  let count = 1;
  if(startNum > count ){
    count = count + count;
    console.log(count);
    }
  else{
    return count
    }  

}
summation(6);







// //wrong
summation = (startNum) => {
  let count = [];
  let endPoint = startNum;
  for (let i = endPoint; startNum === 0 ; i--){
    count.push(startNum)
    startNum--;
  }
  let total = count.reduce((acc, cur) => {return acc + cur});
  return total;
}
summation(4);
// //wrong
// summation = (startNumber) => {
//   let count = [];
//   for (let i = 0 ; i < startNumber ; i++){
//     count.push(startnumber--)
//     console.log(count);
//   }
//     return count;
//   }
// //wrong
// summation = (para) => {
//   let total = [];
//   for (let i = para ; i <= para; i--){
//     total.push(i++)
    
//     return total;}
    
//   let sum = total.reduce((acc,cur)=>{return acc+cur});
//   return sum;
// }
 
