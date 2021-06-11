const makeCase = function (input, type) {
  let arr = input.split(" ");
  if (type === "camel") {
    for (let i = 0; i < arr.length; i++) {
      if (i !== 0) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
      }
    }
    return arr.join("");
  }

  if (type === "pascal") {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join("");
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake");
// console.log(makeCase("this is a string", "kebab");
// console.log(makeCase("this is a string", "title");
// console.log(makeCase("this is a string", "vowel");
// console.log(makeCase("this is a string", "consonant");
// console.log(makeCase("this is a string", ["upper", "snake"]);