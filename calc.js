"use strict";

//make a contructor function that creates properties for the current operand and previous so i can make one object and use different methods built in
const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
    this.btnStyles();
  }
  // i am creating these properties so we can insert them in the POT || COT that way we see it in the HTML
  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operand = undefined;
  }
  btnStyles() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let buttons = Array.from(operationButtons).map((curr, i) => {
      let state = nums.find((cur) => {
        return cur == curr.textContent;
      });
      if (!state) {
        return curr;
      }
    });
    buttons.forEach((curr) => {
      curr.style.borderColor = "#E39744";
      curr.style.backgroundColor = "#EAB071";
      curr.style.color = "white";
    });
    console.log(buttons);
  }
  operands(operand) {
    if (this.currentOperand == "") {
      return;
    }
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.operand = operand;
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  compute() {
    //how to keep track of the cu
    let computation;
    let current = parseFloat(this.currentOperand);
    console.log(current);
    let previous = parseFloat(this.previousOperand);
    console.log(previous);
    switch (this.operand) {
      case "+":
        computation = current + previous;
        break;
      case "/":
        computation = previous / current;
        let divide = (previous / current).toString();
        if (divide.includes(".")) {
          divide.split(".");
          computation = divide[0] + "." + divide[1].toString().slice(0, 4);
        }
        break;
      case "*":
        computation = previous * current;
        break;
      case "-":
        computation = previous - current;

        break;

      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.operand = undefined;
    this.previousOperand = "";
  }

  appendNum(number) {
    //we are adding currOperand so we can get a long string because it saves all previous numbers because we are adding number to it
    if (number == "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand + number.toString();
  }
  format(number) {
    let num = number.toString();
    let digits = parseFloat(num.split(".")[0]);
    let decimal = num.split(".")[1];
    let display;
    if (Number.isNaN(digits)) {
      display = "";
    } else {
      display = digits.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimal != null) {
      return `${display}.${decimal}`;
    } else {
      return display;
    }
  }
  displayContent() {
    this.currentOperandText.innerText = this.format(this.currentOperand);

    if (this.operand != undefined) {
      this.previousOperandText.innerText = `${this.format(
        this.previousOperand
      )} ${this.operand} `;
    } else {
      this.previousOperandText.innerText = "";
    }
  }
}
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

let calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((btn, i, arr) => {
  btn.addEventListener("click", () => {
    calculator.appendNum(btn.innerText);
    calculator.displayContent();
  });
});
operationButtons.forEach((btn, i, arr) => {
  btn.addEventListener("click", () => {
    calculator.operands(btn.innerText);
    calculator.displayContent();
  });
});
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.displayContent();
});
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.displayContent();
});
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.displayContent();
});

let margatita = "margarita";

const obj = {
  name: "josh",
  age: 17,
};

const primitive = function (variable, obj) {
  obj.name = "OBED";
  variable = "primitive";
};

primitive(margatita, obj);

console.log(margatita);
console.log(obj);

const grid = function (n) {
  const length = Array.from({ length: n });
  const spiral = length.map((curr) => {
    return length;
  });

  return spiral;
};

const fill = function (fn) {
  let twoDArr = fn(4);

  twoDArr.forEach((curr, i) => {
    curr.forEach((_, j) => {
      twoDArr[i][j] = 10;
    });
  });
  console.log(fn.name);
  console.log(twoDArr);
};
fill(grid);

const getSmallest = [2, 3, 3333, 332, 2323, 2323, 999, 0, 99].reduce(
  (acc, curr) => {
    return [Math.min(acc[0], curr), Math.max(acc[1], curr)];
  },
  [100, 0]
);

console.log(getSmallest);

const arr = [12, 33, 34, 343, 33];

const arrCreater = arr.reduce((acc, curr) => {
  if (curr > 20) {
    return [...acc, curr];
  } else {
    return (acc = []);
  }
}, []);

console.log(arrCreater);

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      name: name,
    });
  },
};
lufthansa.book(239, "Joshua Ruvalcaba");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
//call method i used when we want to copy a a method into another object we first need to get access to that method we want to copy and use the call method the first argument is what the this keyowrd would look like and after that we just plug in the argumnets that we need for the method and its executed immediately
lufthansa.book.call(eurowings, 32, "joshua");

console.log(eurowings);

const airlines = {
  airline: "Airlines",
  iataCode: "FE",
  bookings: [],
};
const airlinesArr = [23, "johnny"];

//bind method works very similar excepet you store them in variables to use later you can use bind method with functions and methods
const airlinesData = lufthansa.book.bind(airlines);
airlinesData(23, "johhny");
