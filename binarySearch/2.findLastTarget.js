/**
 * 查找有序数组中最后一次出现某数的位置，如果没找到，返回 -1
 * @param  {number[]} nums      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function findLastTarget(nums, target) {
  // 找到 target + 1（刚好比 target）大的元素（如果该数不存在，那么 start 位置也是可以插入该数后，数列继续有序的）
  // 那么前面一个位置，就是最后一次出现某数的位置
  const newTarget = target + 1;
  let start = 0,
    end = nums.length - 1;

  // 最终 break 的时候 start + 1 === end
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (nums[mid] >= newTarget) end = mid - 1;
    else start = mid + 1;
  }

  // 前面一个位置，即 start - 1
  return nums[start - 1] === target ? start - 1 : -1;
}

// test cases
console.log(findLastTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // 2
console.log(findLastTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5)); // 5
console.log(findLastTarget([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5)); // 7
console.log(findLastTarget([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 6)); // -1
