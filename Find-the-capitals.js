var capitals = function (word) {
	const out = [];
  word.split('').forEach((v, i) => {
    if (v.match(/[A-Z]/)) {
        out.push(i);
        }
  });
  return out;
};
