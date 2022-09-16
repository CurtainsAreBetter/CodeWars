function minValue(values){
  values.sort((a, b) => a-b);
  values = new Set(values);
  return +[...values].join('');
}
