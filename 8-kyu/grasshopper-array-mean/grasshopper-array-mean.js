function findAverage(nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}