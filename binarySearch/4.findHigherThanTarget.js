/**
 * 查找有序数组中刚好比某数大的元素位置，如果所有数都比该数小，则返回 nums.length
 * @param  {number[]} nums      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function findHigherThanTarget(nums, target) {
  target += 1;

  let start = 0,
    end = nums.length - 1;

  // 最终 break 的时候 start + 1 === end
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (nums[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  // 因为 start 就是刚好 >= target + 1 的位置
  // 即刚好比 target 大的位置
  return start;
}

// test cases
console.log(findHigherThanTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // 3
console.log(findHigherThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5)); // 6
console.log(findHigherThanTarget([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5)); // 8
console.log(findHigherThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 6)); // 6
console.log(findHigherThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 11)); // 10
