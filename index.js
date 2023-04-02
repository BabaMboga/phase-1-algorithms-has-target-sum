function hasTargetSum(array, target) {
  // Write your algorithm here
 
    const complements = new Set();
    for (const num of array) {
      const complement = target - num;
      if (complements.has(complement)) {
        return true;
      }
      complements.add(num);
    }
    return false;
  
}

/* 
  Write the Big O time complexity of your function here

  0(n)
*/

/* 
  Add your pseudocode here
  Initialize an empty set called "complements"
For each number in the array:
a. Calculate the complement (target minus the current number)
b. If the complement is already in the "complements" set, return true
c. Otherwise, add the current number to the "complements" set
If no pair adds up to the target, return false.
*/

/*
  Add written explanation of your solution here

  Given an array of integers and a target integer, determine if there exists any pair of integers in the array that add up to the target integer.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 7));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 0, 0], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 6, 9], 4));
}


module.exports = hasTargetSum;
