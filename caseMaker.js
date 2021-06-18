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

  if (type === "snake") {
    return arr.join("_");
  }

  if (type === "kebab") {
    return arr.join("-");
  }

  if (type === "title") {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
  }

  if (type === "vowel") {
    let string = "";

    for (let i of input) {
      if (/[aeiou]/.test(i)) {
        string += i.toUpperCase();
      } else {
        string += i.toLowerCase();
      }
    }
    return string;
  }

  if (type === "consonant") {
    let string = "";

    for (let i of input) {
      if (/[aeiou]/.test(i)) {
        string += i.toLowerCase();
      } else {
        string += i.toUpperCase();
      }
    }
    return string;
  }
};
