function parseF(s) {
  const num = parseFloat(s);
  return isNaN(num) ? null : num;
}