const app = "I don't do much.";

let dodger = document.getElementById('dodger');
let leftNumbers = dodger.style.left.replace('px', '');
let left = parseInt(leftNumbers, 10);

function moveDodgerLeft() {

 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
 
  if (right > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener('keydown', e => {
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 39) {
    moveDodgerRight();
  }
});
