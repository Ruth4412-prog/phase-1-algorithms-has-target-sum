function hasTargetSum(array, target) {

  // Write your algorithm here

  for(m=0; m< array.length; m++){
    let compliment = target - array[m];
    for(let n = m+1; n<array.length; n++){
      if(array[n] === compliment){
        return true;
      }
    }
  }
  return false;
}
  /*const firstNum = array[0];
  const lastNum = array[array.length-1]
  const addNum = firstNum + lastNum

  if(addNum === target) return true
  else {
    return false
  }
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  The function should bring true if any pair of numbers in the array is adds upto the target number
*/

/*
  Add written explanation of your solution here
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
  console.log("=>", hasTargetSum([-7, 10, 4,8 ], 3));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  
}

module.exports = hasTargetSum;
