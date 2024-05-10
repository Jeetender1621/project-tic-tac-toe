let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = false;
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8]
];

// Event listener for reset button
resetBtn.addEventListener('click', () => {
  enableBoxes(); // Enable all boxes
  clearBoxes(); // Clear content of all boxes
  hideMessage(); // Hide the message container
});

// Event listener for new game button
newGameBtn.addEventListener('click', () => {
  enableBoxes(); // Enable all boxes
  clearBoxes(); // Clear content of all boxes
  hideMessage(); // Hide the message container
  resetBtn.style.visibility = "visible";
});

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = 'X';
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const clearBoxes = () => {
  for (let box of boxes) {
    box.innerHTML = '';
  }
};

const hideMessage = () => {
  msgContainer.classList.add('hide');
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;   
    
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBoxes();
        showWinner(pos1Val);
        resetBtn.style.visibility = "hidden";
      }
    }
  }
};