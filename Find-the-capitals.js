var capitals = function (word) {
  return word.split('').reduce((arr, v, i) => {
    if (v.match(/[A-Z]/)) {
      arr.push(i);
      return arr;
    } else return arr;
  }, []);
};
