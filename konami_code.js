const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.

function init() {
  document.addEventListener('keydown', handleKeydown)
};

let index = 0;

function handleKeydown(e) {
  // (e) => {}

const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
  	console.log("correct")
    index++;
 
    if (index === code.length) {
      alert("IT KONAMI'D");
 
      index = 0;
    }
  } else {
  	    console.log("nope")

    index = 0;
  }
}