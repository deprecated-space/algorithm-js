/**
 * 查找有序数组中第一次出现某数的位置，如果没找到，返回 -1
 * @param  {number[]} a      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function binarySearch(a, target) {
  var start = 0
    , end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target)
      end = mid - 1;
    else
      start = mid + 1;
  }

  return a[start] === target ? start : -1;
}


/**
 * 查找有序数组中最后一次出现某数的位置，如果没找到，返回 -1
 * @param  {number[]} a      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标，如果没找到，该值为 -1
 */
function binarySearch(a, target) {
  target += 1;
  var start = 0
    , end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target)
      end = mid - 1;
    else
      start = mid + 1;
  }

  return a[end] === target - 1 ? end : -1;
}


/**
 * 查找有序数组中刚好比某数大的元素位置，如果所有数都比该数小，则返回 a.length
 * @param  {number[]} a      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标
 */
function binarySearch(a, target) {
  target += 1;
  var start = 0
    , end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target)
      end = mid - 1;
    else
      start = mid + 1;
  }

  return start;
}


/**
 * 查找有序数组中刚好比某数小的元素位置，如果所有数都比该数大，则返回 -1
 * @param  {number[]} a      从小到大排列的有序数组
 * @param  {number} target   需要查找的元素值
 * @return {number}          数组下标
 */
function binarySearch(a, target) {
  var start = 0
    , end = a.length - 1;

  while (start <= end) {
    var mid = (start + end) >> 1;
    if (a[mid] >= target)
      end = mid - 1;
    else
      start = mid + 1;
  }

  return end;
}