const app = "I don't do much."

let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace('px', '');
  let right = parseInt(rightNumbers, 10);
 
  if (right > 0) {
    dodger.style.right = `${right - 1}px`;
  }
}

// $( document ).ready(function() {
  document.addEventListener('keydown', e => { alert("Clicked!!!")
    // if (e.which === 37) {
    //   moveDodgerLeft();
    // } else if (e.which === 39) {
    //   moveDodgerRight();
    // }
  });
// });