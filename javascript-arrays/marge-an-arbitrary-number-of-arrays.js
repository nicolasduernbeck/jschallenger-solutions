function myFunction(...arrays) {
  const arr = [];
  for (const array of arrays) {
    for (const el of array) {
      arr.push(el);
    }
  }
  return arr;
}
