function myFunction(a, b) {
  return b.split('').reduce((acc, cur) => (cur === a ? acc + 1 : acc + 0), 0);
}
