const camelCase = function (input) {
  let arr = input.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
  }

  return arr.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
