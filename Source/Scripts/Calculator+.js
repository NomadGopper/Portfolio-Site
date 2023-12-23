let num1 = "";
let num2 = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

// calc screen
const out = document.querySelector(".calc-screen p");

function clearAll() {
  num1 = ""; // number 1 and result
  num2 = ""; // number 2
  sign = "";
  finish = false;
  out.textContent = 0;
}

function calculatePercent() {
  if (num1 !== "") {
    num1 = (parseFloat(num1) / 100).toString();
    out.textContent = num1;
  }
}

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".percent").onclick = calculatePercent;

document.querySelector(".calc-buttons").onclick = (Event) => {
  // clicked notButton
  if (!Event.target.classList.contains("btn")) return;
  //   clicked ac
  if (Event.target.classList.contains("ac")) return;

  out.textContent = "";
  // if clicked button
  const key = Event.target.textContent;

  //if clicked button from digit or .
  if (digit.includes(key)) {
    if (num2 === "" && sign === "") {
      num1 += key;

      out.textContent = num1;
    } else if (num1 !== "" && num2 !== "" && finish) {
    } else {
      num2 += key;
      out.textContent = num2;
    }
    console.table(num1, num2, sign);
    return;
  }

  // if clicked button from action
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(num1, num2, sign);
    return;
  }
  // if clicked equal
  if (key === "=") {
    if (num2 === "") num2 = num1;
    switch (sign) {
      case "+":
        num1 = +num1 + +num2;
        break;

      case "-":
        num1 = num1 - num2;
        break;

      case "*":
        num1 = num1 * num2;
        break;

      case "/":
        if (num2 === "0") {
          out.textContent = "Error";
          num1 = "";
          num2 = "";
          sign = "";
          return;
        }
        num1 = num1 / num2;
        break;
    }
    finish = true;
    out.textContent = num1;
    console.table(num1, num2, sign);
  }
};
