function excludingVatPrice(price){
  if (price === null) return -1;
  return +(price / 1.15).toFixed(2);
}
​