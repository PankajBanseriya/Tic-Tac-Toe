let boxes = document.querySelectorAll(".box");
turnO = true;

const winningStreak = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")

let play = document.querySelector("#again");
let reset = document.querySelector("#btn-reset")

const playAgain = () => {
    turnO = true;
    p.innerHTML = ``;
    enableboxes();
    msgContainer.classList.add("hide");
    
}
const enableboxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};


const boxDisabled = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {

    msg.innerHTML = `Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisabled();
}
let p = document.getElementById("demo");
const checkWinner = () => {
    for (let pattern of winningStreak) {
        const position1 = boxes[pattern[0]].innerHTML;
        const position2 = boxes[pattern[1]].innerHTML;
        const position3 = boxes[pattern[2]].innerHTML;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                console.log(`Winner ${position1}`);
                showWinner(position1);
                
            }
        }

    };

}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log(`Button is clicked`);
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
            p.innerHTML = `Player X chance`
        }
        else {
            box.innerHTML = "X";
            p.innerHTML = `Player O chance`
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

play.addEventListener("click", playAgain);
reset.addEventListener("click", playAgain);
