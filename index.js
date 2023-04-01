function hasTargetSum(array, target) {

   for (let i = 0; i < array.length; i++) {  //n steps
    const complement = target - array[i];
    for (let j = i + 1; j <array.length; j++) {
      if (array[j] === complement) return true; // n step = [n * n] (nested loop)
    }
   }
   return false; // 1 step
}


/* 
  Write the Big O time complexity of your function here
   Time complexity = 0(n * n) [Quadratic nested loop[]
   space needed = 0(n)

*/

/* 
  Add your pseudocode here:

iterate over the array of numbers
   for the current number, identify a complementary number that adds to our target i.e if our number is 2, the the number to complement this is 3(2+5)=5
   iterate over the remaining numbers in the array
   check if any of the remaining numbers is the complement, if so return true
if we reach the end of the array return false

*/

/*
  Add written explanation of your solution here:

  we have an array of numbers and the target.

  when a pair of numbers in the array adds-up to the target it returns true.

  when a pair of numbers in the array doesn't add-up to the target it returns false.
  
  first call the function and pass the arguement[array-num], targetNumber


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));

  console.log("");
}

module.exports = hasTargetSum;
