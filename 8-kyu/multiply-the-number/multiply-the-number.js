function multiply(number){
  const digits = Math.abs(number).toString().length;
  return number * Math.pow(5, digits);
}