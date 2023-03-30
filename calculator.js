let buttons = document.querySelectorAll(".btn");
let screen  = document.getElementById("screen");
let screenValue = "";

for(btn of buttons) {
    btn.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        screenValue = buttonText;
        if (buttonText == 'X') {
            screenValue = '*';
            screen.value += screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screenValue = eval(screen.value);
            screen.value = screenValue;
        } else if (buttonText == 'Back') {
            screenValue = screen.value.slice(0, screen.value.length - 1)
            screen.value = screenValue;
        } else {
            screen.value += screenValue;
        }
    })
}