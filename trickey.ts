// @ts-ignore
function trickyFUnction() {
  var a = [];
  var b = a;
  // @ts-ignore
  a[0] = a = [0];
  // @ts-ignore
  b[1] = 1;

  // @ts-ignore
  var result = (a == b) + ({} + {});

  var x = [0];
  x[x[0]] = 1;

  result += x;

  var c = [];
  // @ts-ignore
  c[0] = c = [0];

  // @ts-ignore
  c[1] = 1;

  result += c == c;

  return result;
}

console.log(JSON.stringify(trickyFUnction(), null, 2));
