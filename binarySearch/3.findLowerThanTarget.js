/**
 * 查找有序数组中刚好比某数小的元素位置，如果所有数都比该数大，则返回 -1
 * @param  {number[]} nums      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function findLowerThanTarget(nums, target) {
  let start = 0,
    end = nums.length - 1;

  // 最终 break 的时候 start + 1 === end
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (nums[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  // 因为 start 是刚好 >= target 的位置
  // 所以应该返回 start - 1，或者 end（start - 1 === end）
  return end;
}

// test cases
console.log(findLowerThanTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // 1
console.log(findLowerThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5)); // 3
console.log(findLowerThanTarget([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5)); // 3
console.log(findLowerThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 6)); // 5
console.log(findLowerThanTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 0)); // -1
