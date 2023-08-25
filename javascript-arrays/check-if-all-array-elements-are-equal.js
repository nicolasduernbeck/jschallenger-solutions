function myFunction(arr) {
  let bool = true;
  for (x of arr) {
    if (x !== arr[0]) {
      bool = false;
    }
  }
  return bool;
}
