//https://www.codewars.com/kata/5842df8ccbd22792a4000245/
function expandedForm(num) {
  let expanded = num.toString().split('');
  expanded = expanded.map((v, i, arr) => {
    return Number(v) * 10**(arr.length - (i+1));
  }).filter(v => v).map(v => v.toString()).join(' + ');
  return expanded;
}
