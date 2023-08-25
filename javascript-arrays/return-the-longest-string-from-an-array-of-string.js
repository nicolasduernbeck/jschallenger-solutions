function myFunction(arr) {
  let longestStr = arr[0];

  for (const str of arr) {
    if (str.length > longestStr.length) {
      longestStr = str;
    }
  }
  return longestStr;
}
