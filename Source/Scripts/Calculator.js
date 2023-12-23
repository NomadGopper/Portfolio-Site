function setOperator(operator) {
  window.op = operator;
}

// Count Function
function func() {
  let op = window.op;

  // let for result
  let result = 0;

  //   First and Second Numbers

  let num1 = Number(document.getElementById("num1").value);

  let num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Wrong Operator");
      break;
  }
  document.getElementById("result").innerHTML = "Result " + result;
}
