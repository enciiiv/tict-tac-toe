const boxes = document.querySelectorAll(".box");
const winner = document.querySelector("#winner");
const boxX = `<span style="font-size: 32px">X</span>`;
const boxO = `<span style="font-size: 32px">O</span>`;

let onMoveStatus = "player1";
let inGame = true;

boxes.forEach((b) => {
  b.addEventListener("click", () => {
    if (inGame === false) {
      boxes.forEach((b) => (b.disabled = true));
    } else {
      if (b.innerHTML === "") {
        if (onMoveStatus === "player1") {
          b.innerHTML = boxX;
          onMoveStatus = "player2";
        } else {
          b.innerHTML = boxO;
          onMoveStatus = "player1";
        }
      }
      if (
        (boxes[0].innerHTML === boxX &&
          boxes[1].innerHTML === boxX &&
          boxes[2].innerHTML === boxX) ||
        (boxes[3].innerHTML === boxX &&
          boxes[4].innerHTML === boxX &&
          boxes[5].innerHTML === boxX) ||
        (boxes[6].innerHTML === boxX &&
          boxes[7].innerHTML === boxX &&
          boxes[8].innerHTML === boxX) ||
        (boxes[0].innerHTML === boxX &&
          boxes[3].innerHTML === boxX &&
          boxes[6].innerHTML === boxX) ||
        (boxes[1].innerHTML === boxX &&
          boxes[4].innerHTML === boxX &&
          boxes[7].innerHTML === boxX) ||
        (boxes[2].innerHTML === boxX &&
          boxes[5].innerHTML === boxX &&
          boxes[8].innerHTML === boxX) ||
        (boxes[0].innerHTML === boxX &&
          boxes[4].innerHTML === boxX &&
          boxes[8].innerHTML === boxX) ||
        (boxes[2].innerHTML === boxX &&
          boxes[4].innerHTML === boxX &&
          boxes[6].innerHTML === boxX)
      ) {
        winner.innerText = "Player 1 wins";
        inGame = false;
      } else if (
        (boxes[0].innerHTML === boxO &&
          boxes[1].innerHTML === boxO &&
          boxes[2].innerHTML === boxO) ||
        (boxes[3].innerHTML === boxO &&
          boxes[4].innerHTML === boxO &&
          boxes[5].innerHTML === boxO) ||
        (boxes[6].innerHTML === boxO &&
          boxes[7].innerHTML === boxO &&
          boxes[8].innerHTML === boxO) ||
        (boxes[0].innerHTML === boxO &&
          boxes[3].innerHTML === boxO &&
          boxes[6].innerHTML === boxO) ||
        (boxes[1].innerHTML === boxO &&
          boxes[4].innerHTML === boxO &&
          boxes[7].innerHTML === boxO) ||
        (boxes[2].innerHTML === boxO &&
          boxes[5].innerHTML === boxO &&
          boxes[8].innerHTML === boxO) ||
        (boxes[0].innerHTML === boxO &&
          boxes[4].innerHTML === boxO &&
          boxes[8].innerHTML === boxO) ||
        (boxes[2].innerHTML === boxO &&
          boxes[4].innerHTML === boxO &&
          boxes[6].innerHTML === boxO)
      ) {
        winner.innerText = "Player 1 wins";
        inGame = false;
      }
    }
  });
});
