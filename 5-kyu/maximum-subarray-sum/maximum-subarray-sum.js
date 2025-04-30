var maxSequence = function(arr){
  let maxSum = 0;
  let currentSum = 0;
​
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
​
  return maxSum;
};