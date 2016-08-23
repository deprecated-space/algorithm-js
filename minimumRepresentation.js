/**
 * 字符串最小表示法
 * @param  {string} s
 * @return {number}   字符串最小表示的字符下标
 */
function minimumRepresentation(s) {
  var len = s.length
    , i = 0
    , j = 1
    , k = 0;

  while (i < len && j < len && k < len) {
    var t = s.charCodeAt((i + k) % len) - s.charCodeAt((j + k) % len);
    if (!t)
      k++;
    else {
      if (t > 0)  // maximumRepresentation `>` -> `<`
        i += k + 1;
      else
        j += k + 1;

      if (i === j)
        j++;

      k = 0;
    }
  }

  return i < j ? i : j;
}


// test cases //////////
function getMinPos(s) {
  var len = s.length
    , tmp = s.substring()
    , pos = 0;

  for (var i = 1; i < len; i++) {
    var subStr = s.substring(i) + s.substring(0, i)
    if (subStr < tmp) {
      tmp = subStr;
      pos = i;
    }
  }

  return pos;
}

function generateString(len) {
  var s = 'abcdefghigklmnopqrstuvwxyz';
  var ret = '';
  while (len--)
    ret += s[~~(Math.random() * 26)];
  return ret;
}

var cases = 500000;
var maxnLen = 10000;
for (var i = 0; i < cases; i++) {
  var len = ~~(Math.random() * maxnLen);
  var str = generateString(10);

  var pos1 = minimumRepresentation(str);
  var pos2 = getMinPos(str);

  if (pos1 !== pos2)
    alert("error!");
}

alert("success!");