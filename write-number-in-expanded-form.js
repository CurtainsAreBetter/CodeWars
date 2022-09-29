//https://www.codewars.com/kata/5842df8ccbd22792a4000245/
function expandedForm(num) {
  const expanded = num.toString()
        .split('')
        .map((v, i, arr) => Number(v) * 10**(arr.length - (i+1)))
        .filter(v => v)
        .join(' + ');
  return expanded;
}
