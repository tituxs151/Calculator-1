let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;
    
    if (value === '=') {
      try {
        string = eval(string) || "";
      } catch {
        string = "Error";
      }
      input.value = string;
    }
    else if (value === 'AC') {
      string = "";
      input.value = string;
    }
    else if (value === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    }
    else {
      string += value;
      input.value = string;
    }
  });
});
