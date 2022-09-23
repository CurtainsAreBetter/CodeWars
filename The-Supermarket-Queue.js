//https://www.codewars.com/kata/57b06f90e298a7b53d000a86
function queueTime(customers, n) {
  if (customers.length == 0) {
    return 0;
  } else if (n >= customers.length) {
    return Math.max(...customers);
  } else {
    const tills = [];
    for (let i=0; i<n; i++) tills.push(0);
    let timeTotal = 0;
    let tillTotal = 0;
    
    while (!(customers.length == 0 && tillTotal == 0)) {
      timeTotal++;
      tills.forEach((_, i, arr) => {
        if (arr[i] == 0 && customers.length != 0) arr[i] = customers.shift();
        if (arr[i] > 0) arr[i]--;
      });
      tillTotal = tills.reduce((a,b) => a+b, 0);
      
    }
    return timeTotal;
  }
}
