const talkingCalendar = function (date) {
  let arr = date.split("/");
  let year = arr[0];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[arr[1] - 1];

  const suffix = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  let days = arr[2];
  let firstNumber = days[0];
  let secondNumber = Number(days[1]);
  days = Number(days);

  if (firstNumber === "1") {
    days += "th";
  } else if (secondNumber >= 4) {
    days += "th";
  } else {
    days += suffix[secondNumber];
  }

  return `${month} ${days}, ${year}`;
};
