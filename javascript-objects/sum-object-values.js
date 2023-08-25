function myFunction(a) {
  return Object.values(a).reduce((acc, cur) => acc + cur, 0);
}
