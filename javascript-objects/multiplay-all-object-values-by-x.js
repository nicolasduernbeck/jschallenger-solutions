function myFunction(a, b) {
  for (let i = 0; i < Object.keys(a).length; i++) {
    a[Object.keys(a)[i]] = Object.values(a)[i] * b;
  }
  return a;
}
