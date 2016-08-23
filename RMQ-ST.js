/**
 * 求解数组区间最值
 * O(nlogn) 预处理 & O(1) 查询
 * 非常适用于需要海量查询的场景
 * ST 算法天生用来求解区间最值，查询过程不能改变数组元素值
 * @param {number[]} a  需要查询区间最值的数组
 * @param {function}    返回一个函数，可以传入参数进行最值查询
 */
function RMQ_ST(a) {
  var dp = []
    , n = a.length
    , k = ~~(Math.log(n) / Math.log(2));

  for (var i = 0; i < n; i++)
    dp[i] = [], dp[i][0] = a[i];

  for (var j = 1; j <= k; j++)
    for (var i = 0; i < n; i++) {
      if (i + (1 << j) - 1 >= n)
        break;
      // 如果求区间最小值，改为 Math.min() 即可
      dp[i][j] = Math.max(dp[i][j - 1], dp[i + (1 << (j - 1))][j - 1]);
    }

  var getAns = function(x, y) {
    // 容错
    (x < 0) && (x = 0);
    (y > n - 1) && (y = n - 1);

    var k = ~~(Math.log(y - x + 1) / Math.log(2));

    // 如果求区间最小值，改为 Math.min() 即可
    return Math.max(dp[x][k], dp[y + 1 - (1 << k)][k]);
  };

  return getAns;
}



// test cases ///////////////////////////////
var a = [], len = 1000, maxn = 100;
for (var i = 0; i < len; i++)
  a[i] = ~~(Math.random() * maxn);

var getAns = RMQ_ST(a);

for (var i = 0; i < len; i++)
  for (var j = i; j < len; j++) {
    var subArr = a.slice(i, j + 1);
    var maxn1 = Math.max.apply(null, subArr);
    var maxn2 = getAns(i, j);
    if (maxn1 !== maxn2)
      alert("went wrong!");

  }

alert('success!');