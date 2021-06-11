const repeatNumbers = function (data) {
  let string = "";
  let repeat = [];
  for (let i = 0; i < data.length; i++) {
    string = data[i][0].toString().repeat(data[i][1]);
    repeat.push(string);
  }
  return repeat.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
