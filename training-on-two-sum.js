// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const n1 = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      const n2 = numbers[j];
      if (n1 + n2 == target && i != j) return [i, j];
    }
  }
}
