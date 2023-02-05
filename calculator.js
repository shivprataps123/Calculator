const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let value = this.innerHTML;
    if (value === "C") {
      display.value = "";
    } else if (value === "CE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
}