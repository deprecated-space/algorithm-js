/**
 * 查找有序数组中第一次出现某数的位置，如果没找到，返回 -1
 * @param  {number[]} nums      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function findFirstTarget(nums, target) {
  let start = 0,
    end = nums.length - 1;

  // 最终 break 的时候 start + 1 === end
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (nums[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  // 如果 target 不存在，则在 start 这个位置插入 target，nums 能继续保持有序
  return nums[start] === target ? start : -1;
}

// test cases
console.log(findFirstTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(findFirstTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5));
console.log(findFirstTarget([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5));
console.log(findFirstTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 6));
console.log(findFirstTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 11));
