const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', handleKeydown)
};

let index = 0;

function handleKeydown(e) {
  // (e) => {}
  const keyVal = parseInt(e.detail || e.which);

  if (keyVal === code[index]) {
    console.log("correct")
    index++;

    if (index === code.length) {
      alert("IT KONAMI'D");

      let index = 0;
    }
  } else {
    console.log("nope")
    index = 0;

  };
};