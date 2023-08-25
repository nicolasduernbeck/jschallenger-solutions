function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}
