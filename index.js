// Your code here

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
}}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
      
    }
  });

  document.addEventListener("keydown", function(event) {
     console.log(event);
   });

// function moveDodgerRight(){
//     const rightnumbers = dodger.style.right.replace('px', '')
//     const right = parseInt(rightnumbers, 10)

//     if (right > 0){
//         dodger.style.right = `${right - 1}px`;
//     }
// }

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowRight'){
//         moveDodgerRight();
//     }
// })
  

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(rightNumbers, 10);
    if (left < 400) {
    dodger.style.left = `${left + 1}px`;
}}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
         moveDodgerRight();
    }
  });


