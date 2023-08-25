function myFunction(x, y) {
  const obj = { ...x };
  obj.c = y.c;
  obj.d = y.b;
  obj.e = y.e;
  return obj;
}
